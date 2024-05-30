import { ElMessage, ElMessageBox } from 'element-plus'
import type { User } from '@/shared/types/user'

const text = ref('')
const title = ref('')

function messageDeleteUser(user: User, cb: Function) {
  title.value = `Удаление пользователя ${user.first_name} ${user.last_name}`
  text.value = 'Вы уверены, что хотите удалить пользователя?'
  if (user) {
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
        message: 'Пользователь успешно удален',
      })
    }).catch(() => {
      ElMessage({
        type: 'info',
        message: 'Отмена удаления',
      })
    })
  }
}

export { messageDeleteUser }
