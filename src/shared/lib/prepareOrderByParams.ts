function prepareOrderByParams(orderBy?: string) {
  if (!orderBy)
    return
  const splitedOrderBy = orderBy.split(',')
  return splitedOrderBy.map((s) => {
    switch (s) {
      case '-username':
        return '-username'
      case 'username':
        return 'username'
      case '-fullName':
        return '-last_name,-first_name,-patronymic'
      case 'fullName':
        return 'last_name,first_name,patronymic'
      case '-contacts':
        return '-contacts'
      case 'contacts':
        return 'contacts'
      default:
        return s
    }
  }).join(',')
}

export { prepareOrderByParams }
