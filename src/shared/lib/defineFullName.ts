/**
 * Функция принимает на вход любой аргумент и пытается построить из него ФИО
 * @param user - параметр, в который необходимо передать объект, имеющий на первом уровне вложенности хотя бы одно из полей last_name | first_name | patronymic.
 * @returns Возвращает ФИО или часть его составляющих
 */

function defineFullName(user: any) {
  const words = []

  if (user.last_name)
    words.push(user.last_name)
  if (user.first_name)
    words.push(user.first_name)
  if (user.patronymic)
    words.push(user.patronymic)

  return words.join(' ')
}

export { defineFullName }
