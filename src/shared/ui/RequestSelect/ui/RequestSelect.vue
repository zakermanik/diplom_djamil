<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps<{
  /** ключ, по которому можно запретить пагинацию(по умолчанию есть) */
  pagination?: boolean
  /** Необходимо для ключевого поиска(по умолчанию term) */
  searchKey?: string
  /** классика) */
  placeholder?: string
  /** Метод для загрузки данных с сервера */
  loadData: Function
  /** По данному ключу будут отображться значения обьекта в списке и выбранного значения */
  labelKey: string
  /** По данному плючу будут выбирться знчения */
  valueKey?: string
  params?: object
  /** Класс для опций */
  optionClass?: object | string
  /** Стиль для опций */
  optionStyle?: object
  /** Модель отрисовки надписи в опциях */
  labelModel?: string
  /** Дефолтное значение для случая, когда в labelModel подставляемого значения не существует */
  defaultLabelKeyValue?: string
}>()

/** Значение, передаваемое в v-model */
const modelValue = defineModel<any>()

/** Список для ElOption */
const listData = ref<any>([])
/** Индикатор загрузки данных с сервера */
const loading = ref(false)
/** Загрузка при изменении строки поиска и первом клике на селект */
const firstLoading = ref(false)
/** Флаг о том, что все данные с сервера подгружены, и больше грузить няма чего */
const allDataLoaded = ref(false)
/** Строка поиска при вводе в селект(сейчас как параметр подставляется term) */
const search = ref('')
/** По умолчанию грузит 30 элементов с бэка */
const DEFAULT_PER_PAGE = 30
/** Индикатор, что можно ещё подгружать данные с сервера */
const canLoadMore = ref(false)
/** Уникальный ключ, для бесконечного скролла */
const uniqObserverKey = ref(0)
/** Параметры пагинации */
const pagination = ref({
  page: 1,
  per_page: DEFAULT_PER_PAGE,
})
const isDataLoaded = ref(false)
/** Реф ссылка на блок, при виде которого происходит подгррузка данных следующей страницы */
const observerTarget = ref()

/** Утилита vueuse/core, если таргет переданный  в него видит пользователь, вызывается переданный callback */
useIntersectionObserver(observerTarget, async ([{ isIntersecting }]) => {
  if (isIntersecting)
    await getMore()
})

/** Ключевое слово для поиска(с этим ключем будет отправляться значение, вводимое в селект) */
const searchKey = computed(() => props.searchKey ?? 'term')
/** Без указания плейсхолдера, установится по умолчанию */
const placeholder = computed(() => props.placeholder ?? 'Выберите из списка')

/** Возможность указать ключ, по которому рисовать лейбл значения и в списке(в списке можно через slot) */
const labelKey = computed(() => props.labelKey)

/** Массив множества ключей для создания лейбла */
const arrayOfKeys = computed(() => {
  if (props.labelKey.includes(','))
    return props.labelKey.split(',')
  return undefined
})

/** Необходимо, если в списке с которым будем работать, нету id. Без указания пропса, id по умолчанию */
const valueKey = computed(() => props.valueKey ?? 'id')

/** Без указания класса для option возвращается пустая строка */
const optionClass = computed(() => props.optionClass ?? '')

/** Без указания стилей для option возвращается пустой объект */
const optionStyle = computed(() => props.optionStyle ?? {})

/** Строка, по которой форматируется label опции - в место, где нужно вставить свое значение, пишется (ключ) */
const labelModel = computed(() => props.labelModel ?? '')

/** Строка, по которой форматируется label опции - в место, где нужно вставить свое значение, пишется (ключ) */
const defaultLabelKeyValue = computed(() => props.defaultLabelKeyValue ?? '')

/** Необходимо для проверки, находится ли значение при инициализации, в списке который пришел с бэка */
const hasModelValueInListData = computed(() => listData.value.some((l: any) => l![valueKey.value] === modelValue.value![valueKey.value]))

const hasPagination = computed(() => props.pagination)

const requestParams = computed(() => {
  let params: any = {}
  if (searchKey.value)
    params[searchKey.value as string] = search.value
  else params.term = search.value

  if (hasPagination.value) {
    params = {
      ...params.value,
      page: pagination.value.page,
      per_page: pagination.value.per_page,
    }
  }

  return params
})

/** Метод для изменения значения, которое находится в v-model */
function handleChangeModelValue(value: any) {
  if (!value)
    modelValue.value = null
  else modelValue.value = value
}

/**
 * Метод для подгрузки данных, если список из табличных данных
 * При начале подгрузки, появляется индикатор(loader)
 * Когда все данные загружены, появляется оповещение в конце списка(Все данные загружены)
 */
async function getMore() {
  if (!canLoadMore.value && !hasPagination.value)
    return

  loading.value = true
  canLoadMore.value = false
  try {
    const { data } = await props.loadData({
      ...props.params,
      ...requestParams.value,
    })
    if (!data.next) {
      canLoadMore.value = false
      allDataLoaded.value = true
    }
    else {
      canLoadMore.value = true
      pagination.value.page++
      uniqObserverKey.value = listData.value.length
    }

    const newItems = data.results
    listData.value = [...listData.value, ...newItems]
  }
  catch (e) {
    console.error(e)
  }
  finally {
    loading.value = false
  }
}

/** Функция определения лейбла опции */
function defineLabel(data: any) {
  /* Если нет модели, и 1 ключ - возвращается начение по 1 ключу */
  if (!arrayOfKeys.value && !labelModel.value)
    return defineValue(labelKey.value, `(${labelKey.value.split(':')[0]})`)

  /* Если есть модель лейбла и 1 ключ */
  if (labelModel.value && !arrayOfKeys.value)
    return defineValue(labelKey.value, labelModel.value)

  /* Далее по модели и массиву ключей формируется лейбл */
  if (labelModel.value && arrayOfKeys) {
    let label = labelModel.value
    arrayOfKeys.value?.forEach((el: any) => {
      label = defineValue(el, label)
    })

    return label
  }

  return defaultLabelKeyValue.value

  function defineValue(sKey: string, sLabel: string) {
    const sKeyByDoubleDot = sKey.split(':')
    const stringEl = sKeyByDoubleDot[0]
    const localDefault = sKeyByDoubleDot[1]

    const localKeys = stringEl.split('.')
    const labelToReplace = localKeys.length > 1 ? defineNestValue(data, localKeys, 0) : data[localKeys[0]]
    return sLabel.replaceAll(`(${stringEl})`, labelToReplace ?? localDefault ?? defaultLabelKeyValue.value)
  }

  /* Рекурсивная функция, возвращающая значение из вложенного объекта */
  function defineNestValue(nestData: any, localKeys: any, index: number) {
    if (typeof (nestData) !== 'object' || localKeys.length === index)
      return nestData

    return defineNestValue(nestData[localKeys[index]], localKeys, index + 1)
  }
}

function prepareLoadData() {
  listData.value = []
  canLoadMore.value = false
  pagination.value.page = 1
  uniqObserverKey.value = 0
  loading.value = false
  firstLoading.value = true
  allDataLoaded.value = false
}

/** Метод для подгрузки списка с бэка (работает сейчас только с табличными данными, для других видом необходимо донастраивать) */
async function loadData(term?: string) {
  if (isDataLoaded.value && search.value === term)
    return

  search.value = term ?? ''
  prepareLoadData()
  try {
    const { data } = await props.loadData({
      ...props.params,
      ...requestParams.value,
    })

    if (data.results) {
      if (!data.next) {
        canLoadMore.value = false
      }
      else {
        canLoadMore.value = true
        pagination.value.page++
        uniqObserverKey.value = listData.value.length
      }
      listData.value = data.results
    }
    else {
      listData.value = data
      canLoadMore.value = false
    }
  }
  catch (e) {
    console.error(e)
  }
  finally {
    firstLoading.value = false
    isDataLoaded.value = true
  }
}

watch(() => props.params, () => {
  isDataLoaded.value = false
})
</script>

<template>
  <ElSelect
    :model-value="modelValue"
    clearable
    filterable
    :placeholder="placeholder"
    :value-key="valueKey"
    :loading="firstLoading"
    remote
    :remote-method="loadData"
    @change="handleChangeModelValue"
  >
    <ElOption
      v-if="modelValue && !hasModelValueInListData"
      :label="defineLabel(modelValue)"
      :value="modelValue"
      :class="optionClass"
      :style="optionStyle"
    >
      <slot :data="modelValue" name="extra" />
    </ElOption>
    <ElOption
      v-for="data in listData"
      :key="data[valueKey]"
      :label="defineLabel(data)"
      :value="data"
      :class="optionClass"
      :style="optionStyle"
    >
      <slot :data="data" name="label" />
    </ElOption>
    <div v-if="!firstLoading && hasPagination && canLoadMore" ref="observerTarget" :key="uniqObserverKey" />
    <div v-if="loading" v-loading="loading" class="h-[30px]" />
    <div v-if="allDataLoaded" class="flex items-center justify-center">
      <ElText>Все данные загружены</ElText>
    </div>
    <template #loading>
      <div v-loading="firstLoading" class="h-[30px]" />
    </template>
  </ElSelect>
</template>
