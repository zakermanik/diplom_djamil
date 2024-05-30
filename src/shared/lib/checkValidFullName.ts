/**
 * Функционал проверки всего ФИО пациента на наличие запрещенных условий и знаков
 */
export function checkValidFullName(fullName: string) {
  if (!fullName)
    return true

  const startChar = fullName.charAt(0)
  if (startChar === ' ' || startChar === '-')
    return false

  const lastChar = fullName.charAt(fullName.length - 1)
  if (lastChar === ' ' || lastChar === '-')
    return false

  for (let i = 0; i < fullName.length; i++) {
    const currentChar = fullName.charAt(i)
    const previousChar = fullName.charAt(i - 1)
    const currentCharCode = fullName.charCodeAt(i)
    if ((currentChar === ' ' || currentChar === '-') && (previousChar === ' ' || previousChar === '-'))
      return false

    const isCharAllowed = (currentCharCode >= 1040 && currentCharCode <= 1103) || currentCharCode === 32 || currentCharCode === 45
    if (!isCharAllowed)
      return false
  }

  const words = fullName.split(' ').length
  if (words < 2 || words > 3)
    return false

  return true
}
