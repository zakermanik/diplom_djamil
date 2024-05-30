/**
 * Форматирование букв ФИО в нужный регистр
 */
export function formatFullNameToCase(fullName: string) {
  let formattedPatientfullName = ''

  for (let i = 0; i < fullName.length; i++) {
    const currentChar = fullName[i]
    const previousChar = fullName[i - 1]

    if (i === 0 || previousChar === ' ' || previousChar === '-')
      formattedPatientfullName += currentChar.toUpperCase()

    else if (currentChar !== ' ' && currentChar !== '-')
      formattedPatientfullName += currentChar.toLowerCase()

    else formattedPatientfullName += currentChar
  }

  return formattedPatientfullName
}
