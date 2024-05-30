/** Статус инцидента подстанции */
export type IncidentSubstationStatus =
  'NEW' /** Новое обращение */
  | 'DEPARTURE' /** Выезд */
  | 'ARRIVED' /** Прибытие */
  | 'COMPLETED' /** Завершено */
  | 'REJECTED' /** Отказ */

/** Инцидент подстанции */
export interface IncidentSubstation {
  /** уникальный ключ */
  id: number
  /** Имя */
  name: string
  /** Подстанция */
  substation: number
  /** Инцидент */
  incident: number
  /** Адрес */
  address: string
  /** Отображаемый статус */
  status_display: string
  /** Статус подстанции */
  status: IncidentSubstationStatus
  /** Дата изменения статуса подстанции */
  status_change_dt: string
  /** Телефон */
  phone: string
  /** Оператор */
  operator: number
  /** Специфичная информация */
  spec_info: {
    description: string
  }
}
