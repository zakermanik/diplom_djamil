import { ElMessage, ElMessageBox } from 'element-plus'

const text = ref('')
const title = ref('')

function messageDeleteVehicle(cars: string[], cb: Function) {
  if (!cars.length)
    return
  if (cars.length > 1) {
    title.value = 'Удаление нескольких автомобилей'
    text.value = 'Вы уверены, что хотите удалить автомобили:'
  }

  else {
    title.value = `Удаление автомобиля ${cars[0]}`
    text.value = 'Вы уверены, что хотите удалить автомобиль?'
  }

  if (cars.length) {
    ElMessageBox.confirm(
      `${text.value}` + `<br>${cars.length > 1 ? cars.map(c => c = `${cars.indexOf(c) + 1}. ${c}`).join('<br>') : ''}`,
      title.value,
      {
        dangerouslyUseHTMLString: true,
        confirmButtonText: 'Да',
        cancelButtonText: 'Отмена',
      },
    ).then(() => {
      cb()
      ElMessage({
        type: 'success',
        message: 'Автомобиль(и) успешно удален(ы)',
      })
    }).catch(() => {
      ElMessage({
        type: 'info',
        message: 'Отмена удаления',
      })
    })
  }
}

export { messageDeleteVehicle }
