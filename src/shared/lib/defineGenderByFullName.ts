/**
 * Определение пола пациента по ФИО
 * В массивах распространенные окончания женских ФИО и распространенные окончания отчеств (мужское и женское)
 * Рассчёт пола пациента исходит из очков за ФИО, имеющее женские/мужские окончания
 *  Фамилия - +1 очко (большое количество людей имеет нетрадиционные русские фамилии, поэтому очков за фамилию наименьшее количество)
 *  Имя - +2 очка
 *  1) Отчество - +3 очка в случае, если не определено окончание 'ич' и 'на'
 *  2) Отчество - +4 очка в случае, если определено окончание 'ич' и 'на', т. к. это традиционное русское окончание отчества, наиболее вероятнее определяющее пол человека
 */
export function defineGenderByFullName(fullName: string) {
  if (!fullName)
    return ''

  const femaleLastChars = ['а', 'я', 'ь']
  const patronymicEnds = ['ич', 'на']
  const points = { male: 0, female: 0 }
  const words = fullName.split(' ').filter(el => !!el)

  if (words.length < 2 || words.length > 3)
    return ''

  words.forEach((el, index) => {
    const lastChar = el[el.length - 1].toLowerCase()
    const end = el.slice(el.length - 2).toLowerCase()

    // Условие, если это отчество и у него есть распространенное окончание
    if (index === 2 && el.length >= end.length && patronymicEnds.includes(end)) {
      if (end === patronymicEnds[0])
        points.male += index * 2
      else if (end === patronymicEnds[1])
        points.female += index * 2
    }
    // Условие для фамилии, имеи и отчества, не имеющего распространненных окончаний
    else {
      if (femaleLastChars.includes(lastChar))
        points.female += index + 1
      else points.male += index + 1
    }
  })

  if (points.female > points.male)
    return 'F'
  else if (points.female < points.male)
    return 'M'
  else return ''
}
