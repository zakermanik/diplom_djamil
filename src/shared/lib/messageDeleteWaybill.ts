import { ElMessage, ElMessageBox } from 'element-plus'

function messageDeleteWaybill(cb: Function) {
  ElMessageBox.confirm(
    'Вы уверены, что хотите удалить маршрутное задание?',
    'Удаление маршрутного задания',
    {
      confirmButtonText: 'Да',
      cancelButtonText: 'Отмена',
    },
  ).then(() => {
    cb()
    ElMessage({
      type: 'success',
      message: 'Маршрутное задание успешно удалено',
    })
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: 'Отмена удаления',
    })
  })
}

export { messageDeleteWaybill }
