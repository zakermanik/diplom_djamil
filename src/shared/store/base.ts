import type { BaseApi } from '../types/api'

/**
 * Хранилище имеет следующий функционал:
 * 1. Получение всех данных с сервера методом getAll с поддержкой пагинации.
 * При бесконечном скролле , после использования метода getAll , получаем доступ к использованию getMore
 * При бесконечном скроле, мы так же имеет доступ к никальному ключ, для тригера observer элемента.
 * Для постраничного вывода через пагинацию кнопок, необходимо самостоятельно перезатирать параметры пагинации
 * В метод getAll отправляем страницу и кол-во элементов на странице со всеми фильтрами и получаем результат
 * Методы сами определяют момент, когда кол-во страниц закончилось ( реализовано под пагинационные данные из Джанго)
 * 2. Получения обьекта данных по id методом getOne
 * 3. Удаление remove
 * 4. Обновление update
 * 5. Содержание параметров для фильтрации, поиска, сортировки params
 * 6. Содержатся необходимые переменные форм для создание/обновление, как для еденичного , так и массового создания/обновления(form, forms)
 * 7. Метод $reset для обновления стора до начального состояния
 * 8. При каждом запросе, мы имеет доступ к состоянию загрузки
 * При выполнении запроса isLoading переходит в true, после окончания не зависимо от результата переходи в false
 * 9. После каждого запроса, до выполнения следующего у нас есть доступ к ошибке, поле error в случае ошибок с сервера
 * 10. Метод resetParams для обнуления параметров поиска
 * 11. Методы createReport и createFile Для работы с получением файлов
 * 12. Методы createFileJpeg Для работы с формированием ссылки jpeg файлов
 * createReport принимает необходимые данные(data/body) для запроса методом POST, и принимает в себя endpoint.
 * Как пример, если сервис у себя имеет endpoint /drivers/, после передачи endpoint report мы получим /drivers/report
 * createFile работает с id конкретного документа и endpoint расширяемый начальный для получения детального документа
 * @param service Api сервис, который стор будет использовать для обращения к серверу.
 * Сервис должен содержать в себе все необходимые методы для реализации CRUD(getAll, getOne, remove, update, create)
 *
 */
export function useBaseApiStore<T, K, U>(service: BaseApi, model?: U) {
  const DEFAULT_PER_PAGE = 30

  const form = ref({}) as Ref<U>
  const forms = ref([]) as Ref<U[]>
  setInitForms(model)

  const items = ref([]) as Ref<T[]>
  const error = ref<any>(null)
  const isLoading = ref(false)
  const canLoadMore = ref(false)
  const uniqObserverKey = ref(1)
  const pagination = ref({
    page: 1,
    per_page: DEFAULT_PER_PAGE,
  })
  const params = ref({}) as Ref<K>
  const searchParams = ref({}) as Ref<Partial<K>>
  const filterParams = ref({}) as Ref<Partial<K>>
  const sortParams = ref({}) as Ref<Partial<K>>

  function resetSearchParams() {
    for (const key of Object.keys(searchParams.value))
      delete params.value[key as keyof typeof params.value]

    searchParams.value = {}
  }

  function resetFilterParams() {
    for (const key of Object.keys(filterParams.value))
      delete params.value[key as keyof typeof params.value]

    filterParams.value = {}
  }

  function resetSortParams() {
    for (const key of Object.keys(sortParams.value))
      delete params.value[key as keyof typeof params.value]

    sortParams.value = {}
  }

  function resetParams() {
    pagination.value = {
      page: 1,
      per_page: DEFAULT_PER_PAGE,
    }
    canLoadMore.value = false
    params.value = {} as K
    resetSearchParams()
    resetFilterParams()
    resetSortParams()
  }

  function setInitForms(model?: U) {
    if (model) {
      form.value = JSON.parse(JSON.stringify(model))
      forms.value = [JSON.parse(JSON.stringify(model))]
    }
  }

  function $reset() {
    setInitForms(model)
    resetParams()
    items.value = []
    error.value = null
    isLoading.value = false
    uniqObserverKey.value = 0
    form.value = {} as U
    forms.value = [] as U[]
  }

  watchEffect(() => {
    params.value = {
      ...params.value,
      ...filterParams.value,
      ...searchParams.value,
      ...sortParams.value,
    }
  })

  async function getMore(payload = {}) {
    if (!canLoadMore.value)
      return

    canLoadMore.value = false
    error.value = null
    isLoading.value = true
    // const params = connectParams()
    try {
      const { data } = await service.getAll({
        ...params.value,
        ...pagination.value,
        ...payload,
      })
      if (!data.next) {
        canLoadMore.value = false
      }
      else {
        canLoadMore.value = true
        pagination.value.page++
        uniqObserverKey.value = items.value.length
      }

      const newItems = data.results as T[]
      items.value = [...items.value, ...newItems]
      return newItems
    }
    catch (e) {
      error.value = e
    }
    finally {
      isLoading.value = false
    }
  }

  async function getAll(payload = {}) {
    pagination.value.page = 1
    error.value = null
    isLoading.value = true
    // const params = connectParams()
    try {
      const { data } = await service.getAll({
        ...params.value,
        ...pagination.value,
        ...payload,
      })
      if (!data.next) {
        canLoadMore.value = false
      }
      else {
        canLoadMore.value = true
        pagination.value.page++
        uniqObserverKey.value = items.value.length
      }
      const newItems = data.results as T[]
      return items.value = newItems
    }
    catch (e) {
      error.value = e
    }
    finally {
      isLoading.value = false
    }
  }

  async function getOne(id: number | string) {
    error.value = null
    isLoading.value = true
    try {
      const { data } = await service.getOne(id)
      return data
    }
    catch (e) {
      error.value = e
    }
    finally {
      isLoading.value = false
    }
  }

  async function update(id: number | string, data: Partial<U>) {
    error.value = null
    isLoading.value = true
    try {
      const { data: updatedIncident } = await service.update(id, data)
      const updatedIncidentIndex = (items.value as T & { id: number }[]).findIndex(
        i => i.id === updatedIncident?.id,
      )
      if (updatedIncidentIndex !== -1)
        items.value[updatedIncidentIndex] = updatedIncident
      return updatedIncident as Omit<T, 'id'>
    }
    catch (e) {
      error.value = e
    }
    finally {
      isLoading.value = false
    }
  }

  async function remove(id: number | string) {
    error.value = null
    isLoading.value = true
    try {
      const { data: deletedIncident } = await service.remove(id)
      const deletedIncidentIndex = (items.value as T & { id: number }[]).findIndex(
        i => i.id === id,
      )
      if (deletedIncidentIndex !== -1) {
        const deletedItem = items.value[deletedIncidentIndex]
        items.value.splice(deletedIncidentIndex, 1)
        return deletedItem
      }
      return deletedIncident
    }
    catch (e) {
      error.value = e
    }
    finally {
      isLoading.value = false
    }
  }

  async function create(data: Partial<U>) {
    error.value = null
    isLoading.value = true
    try {
      const { data: item } = await service.create(data)
      return item
    }
    catch (e) {
      error.value = e
      console.log(error.value)
    }
    finally {
      isLoading.value = false
    }
  }

  async function createReport(data = {}, endpoint: string) {
    error.value = null
    isLoading.value = true
    try {
      const { data: result } = await service.createReport(data, endpoint)
      return result
    }
    catch (e) {
      error.value = e
    }
    finally {
      isLoading.value = false
    }
  }

  async function createFile(id: string | number, endpoint: string) {
    error.value = null
    isLoading.value = true
    try {
      const { data } = await service.createFile(id, endpoint)
      return data
    }
    catch (e) {
      error.value = e
    }
    finally {
      isLoading.value = false
    }
  }

  async function createFileJpeg(data = {}, endpoint: string) {
    error.value = null
    isLoading.value = true
    try {
      const { data: result } = await service.createFileJpeg(data, endpoint)
      return result
    }
    catch (e) {
      error.value = e
    }
    finally {
      isLoading.value = false
    }
  }

  return {
    form,
    forms,
    params,
    items,
    error,
    isLoading,
    canLoadMore,
    uniqObserverKey,
    sortParams,
    filterParams,
    searchParams,
    setInitForms,
    getAll,
    getMore,
    getOne,
    update,
    create,
    createFile,
    createFileJpeg,
    createReport,
    remove,
    resetParams,
    resetFilterParams,
    resetSearchParams,
    resetSortParams,
    $reset,
  }
}
