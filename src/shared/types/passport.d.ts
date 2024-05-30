/** Паспорт */
export interface Passport {
  /** Уникальный ключ */
  id: number | null
  /** Серия */
  series: number | null
  /** Номер */
  number: number | null
  /** Дата выдачи */
  dt: string
  /** Водитель */
  driver: number | null
}
