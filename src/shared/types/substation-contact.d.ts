/** Контакты подстанции */
export interface SubstationContact {
  /** Телефон */
  phone: string
  /** Адрес */
  address: string
  /** Диспетчер подстанции */
  substation_manager: SubstationManager
}

/** Диспетчер подстанции */
export interface SubstationManager {
  /** Ф.И.О. */
  fullname: string
  /** Никнейм */
  username: string
  /** Статус */
  status: SubstationManagerStatus
}

enum SubstationManagerStatus {
  LOGGED_OUT, /** Не в сети */
  AVAILABLE, /** В работе */
  IN_CALL, /** Занят */
  AFTER_CALL, /** Не беспокоить */
  ON_BREAK, /** На перерыве */
}
