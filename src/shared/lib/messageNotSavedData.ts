import { ElMessage, ElMessageBox } from 'element-plus'

function messageNotSavedData(cb: Function) {
  ElMessageBox.confirm(
    'Внимание! Вы покидаете страницу с несохраненными данными автомобиля. Хотите продолжить без сохранения?',
    'Вы не сохранили данные',
    {
      confirmButtonText: 'Да',
      cancelButtonText: 'Вернуться',
    },
  )
    .then(() => {
      cb()
      ElMessage({
        type: 'success',
        message: 'Вы покинули страницу',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Отмена перехода',
      })
    })
  // TO DO: заменить на другие действия после создания страницы отдельного путевого листа
}

export { messageNotSavedData }
