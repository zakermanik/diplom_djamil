/**
 * Техническое обслуживание
 */
export interface Maintenance {
  /** Уникальный ключ */
  id: number | null
  /** Дата выдачи */
  dt_from: string
  /** Действителен до */
  dt_to: string
  /** Транспортное средство - id */
  vehicle: number | null
}
