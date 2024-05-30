type Order =
  'ascending'
  | 'descending'

function changeSortingOrder(prop: string) {
  const propsArray = prop.split(',')
  const dashedPropsArray = propsArray.map(name => `-${name}`)

  return dashedPropsArray.join(',')
}
/**
 * Сотавление параметра запроса на сортировку по полям
 * @param prop - параметр по которому идёт сортировка
 * @param order - в каком порядке
 * @returns параметр сортировки для запроса
 */
function getSortOrderByJS<T extends string>(prop: T, order?: Order): string {
  switch (order) {
    case 'ascending':
      return prop

    case 'descending':
      return changeSortingOrder(prop)
    default:
      return ''
  }
}
export { getSortOrderByJS }
