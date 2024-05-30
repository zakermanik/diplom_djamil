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
 * @returns параметр запроса для сортировки
 */
function getSortOrderBy<T extends string>(prop: T, order?: Order): { order_by: string } | '' {
  switch (order) {
    case 'ascending':
      return { order_by: prop }

    case 'descending':
      return { order_by: changeSortingOrder(prop) }

    default:
      return ''
  }
}
export { getSortOrderBy }
