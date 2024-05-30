import { ElMessage, ElMessageBox } from 'element-plus'
import { isEqual } from 'lodash-es'

interface Params {
  oldValue: null | Record<string, unknown>
  data?: string
}

export function useNavigationGuard<T>(form: null | T, params: Params) {
  const isEdit = ref(false)

  // при клике на кнопку сохранить сбрасывется значения формы и oldVal
  function $reset() {
    params.oldValue = null
    form = null
    isEdit.value = false
  }

  watch(() => form, (newValue) => {
    if (isEqual(toValue(params.oldValue), toValue(newValue)))
      isEdit.value = false

    else
      isEdit.value = true
  }, { deep: true })

  onBeforeRouteLeave((to, from, next) => {
    if (isEdit.value) {
      ElMessageBox.confirm(`Внимание! Вы покидаете страницу с несохраненными данными ${params.data ?? params.oldValue?.model}. Хотите продолжить без сохранения? Вы не сохранили данные`, {
        confirmButtonText: 'Да',
        cancelButtonText: 'Вернуться',
      }).then(() => next()).catch(() => ElMessage({
        type: 'info',
        message: 'Отмена перехода',
      }))
    }
    else {
      next()
    }
  })

  return { isEdit, $reset }
}
