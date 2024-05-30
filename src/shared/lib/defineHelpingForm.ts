export function defineHelpingForm(helpingForm: string) {
  switch (helpingForm) {
    case 'emergency':
      return 'Экстренная'
    case 'urgent':
      return 'Неотложная'
    case 'other':
      return 'Прочая'
    case 'transportation':
      return 'Перевозка'
    default:
      return helpingForm
  }
}
