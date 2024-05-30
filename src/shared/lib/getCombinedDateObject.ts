import moment from 'moment'

/**
 * Функция принимает на вход дату и время и склеивает их в формате iso
 * @param date - Дата
 * @param time - Время
 * @returns склеинную дату и время в формате iso или null
 */

function getCombinedDateObject(date: Date, time: Date) {
  if (!(date && time))
    return null

  return moment(`${moment(date).format('YYYY-MM-DD')} ${moment(time).format('HH:mm:ss z')}`).toISOString()
}

export { getCombinedDateObject }
