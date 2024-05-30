/** Водительские права */
export interface DriverLicense {
  /** уникальный ключ */
  id: number | null
  /** Дата окончания действия водительского удостоверения */
  dt_to: string
  /** Серия */
  series: number | null
  /** Номер */
  number: number | null
  /** Дата начала действия водительского удостоверения */
  dt_from: string
  /** Водитель */
  driver: numbe | null
  /** Категории водительского удостоверения */
  driver_license_types: number[]
}
