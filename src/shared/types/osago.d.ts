/** Полис ОСАГО */
export interface Osago {
  /** Уникальный ключ */
  id: number | null
  /** Название страховой компании */
  company_name: string
  /** Номер */
  number: number | null
  /** Дата выдачи */
  dt_from: string
  /** Действителен до */
  dt_to: string
  /** Транспортное средство - id */
  vehicle: number | null
}
