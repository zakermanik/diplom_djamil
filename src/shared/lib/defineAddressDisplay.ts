/**
 * Функция принимает на вход любой аргумент и пытается построить из него адрес для отображения пользователю
 * @param address - параметр, в который необходимо передать объект, имеющий на первом уровне вложенности хотя бы одно из полей city | street | floor | flat.
 * @returns В случае, если нужные поля имеются - возвращает адрес в виде строки. Если нужных полей нет - вернёт "Адрес неизвестен"
 */

function defineAddressDisplay(address: any) {
  if (!address)
    return

  const words = []

  if (address.city && typeof address.city === 'string')
    words.push(address.city)
  if (address.street && typeof address.street === 'string')
    words.push(address.street)
  if (address.house && typeof address.house === 'string')
    words.push(`д. ${address.house}`)
  if (address.flat && typeof address.flat === 'string')
    words.push(`кв. ${address.flat}`)

  if (words.length)
    return words.join(', ')
  else
    return 'Адрес неизвестен'
}

export { defineAddressDisplay }
