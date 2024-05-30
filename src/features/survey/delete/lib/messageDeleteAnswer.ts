import { ElMessage, ElMessageBox } from 'element-plus'
import type { Answer } from '@/shared/types/survey'

const text = ref('')
const title = ref('')

function messageDeleteAnswer(answer: Answer, cb: Function) {
  title.value = 'Удаление ответа'
  text.value = `Вы уверены, что хотите удалить ответ - ${answer.value}?`

  ElMessageBox.confirm(
    text.value,
    title.value,
    {
      confirmButtonText: 'Да',
      cancelButtonText: 'Отмена',
    },
  ).then(() => {
    cb()
    ElMessage({
      type: 'success',
      message: 'Ответ успешно удалён',
    })
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: 'Отмена удаления',
    })
  })
}

export { messageDeleteAnswer }
