import { ElMessage, ElMessageBox } from 'element-plus'

function messageDeleteBrigade(cb: Function) {
  ElMessageBox.confirm(
    'После подтверждения, данные восстановить невозможно',
    'Вы точно хотите удалить бригаду?',
    {
      confirmButtonText: 'Да',
      cancelButtonText: 'Отмена',
    },
  ).then(() => {
    cb()
    ElMessage({
      type: 'success',
      message: 'Бригада успешно удалена',
    })
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: 'Отмена удаления',
    })
  })
}

export { messageDeleteBrigade }
