/** Контакты пользователя */
export interface UserContact {
  /** Телефон */
  phone: string
  /** Никнейм */
  username: string
  /** Статус */
  status: UserStatus
  /** Ф.И.О. */
  user_fio: string
}

enum UserStatus {
  LOGGED_OUT, /** Не в сети */
  AVAILABLE, /** В работе */
  IN_CALL, /** Занят */
  AFTER_CALL, /** Не беспокоить */
  ON_BREAK, /** На перерыве */
}
