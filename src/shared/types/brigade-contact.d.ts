/** Контакты бригады */
export interface BrigadeContact {
  /** Телефон */
  phone: string
  /** Бригада */
  brigade: Brigade
  /** Ф.И.О. ответственного */
  responsible_fio: string
}

/** Бригада */
export interface Brigade {
  /** Уникальный ключ */
  id: number
  /** Статус */
  status: BrigadeStatus
  /** Адрес */
  address: string
}

enum BrigadeStatus {
  open_shift, /** Открыл смену */
  close_shift, /** Закрыл смену */
  break, /** Перерыв */
  repair, /** На ремонте */
}
