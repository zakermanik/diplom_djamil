import type { Osago } from './osago'
import type { Maintenance } from './maintenance'

/** Транспортное стредство */

export interface Vehicle {
  /** Уникальный ключ */
  id: number | null
  /** Техническое обслуживание */
  maintenance: Maintenance
  /** Страховой полиc */
  osago: Osago
  /** Государственынй номер */
  number: string
  /** Марка */
  manufacturer: string
  /** Модель */
  model: string
  /** Серия ПТС */
  pts_series: string
  /** Номер ПТС */
  pts_number: number | null
  /** VIN-Номер */
  vin_number: string
  /* Летний расход топлива по норме* */
  summer_fuel_consumption: number | null
  /* Зимний расход топлива по норме* */
  winter_fuel_consumption: number | null
  /** Норма расхода с кондиционером */
  with_air_conditioning: number | null
}
