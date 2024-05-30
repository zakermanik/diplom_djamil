/**
 * Функция форматирования ФИО пациента в формате ввода в инпут (:formatter)
 */
export function formatFullNameOnInput(fullName: string) {
  if (!fullName)
    return ''

  const length = fullName.length
  const lastCharIndex = length - 1
  const words = fullName.split(' ').filter(el => !!el)
  const lastChar = fullName.charAt(lastCharIndex)
  const restChars = fullName.slice(0, lastCharIndex)
  const preLastChar = fullName.charAt(lastCharIndex - 1)

  const isCharAllowed = (lastChar.charCodeAt(0) >= 1040 && lastChar.charCodeAt(0) <= 1103) || lastChar.charCodeAt(0) === 32 || lastChar.charCodeAt(0) === 45
  if (!isCharAllowed)
    return restChars

  if (!preLastChar && (lastChar === ' ' || lastChar === '-'))
    return restChars

  if ((lastChar === '-' || lastChar === ' ') && (preLastChar === '-' || preLastChar === ' '))
    return restChars

  if (lastChar === ' ' && words.length > 3)
    return restChars

  if (words.length === 3 && lastChar === ' ')
    return restChars

  if ((!preLastChar || preLastChar === ' ' || preLastChar === '-') && lastChar !== ' ' && lastChar !== '-')
    return restChars + lastChar.toUpperCase()

  return restChars + lastChar.toLowerCase()
}
