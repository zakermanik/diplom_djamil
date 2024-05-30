import type { Driver } from './driver'
import type { Vehicle } from './vehicle'

/** Путевой лист */
export interface Waybill {
  /** уникальный ключ */
  id: number
  /** серия */
  series: string
  /** Водитель */
  driver: Driver
  /** Транспортное стредство */
  vehicle: Vehicle
  /** номер */
  number: string
  /** Дата выезда */
  dt_from: string
  /** Дата прибытия */
  dt_to: string
  /** Дата путевого листа */
  dt: string
  /** Литров топлива до выезда */
  fuel_at_start: number
  /** Литров топлива по приезду */
  fuel_at_end: number
  /** Пробег до выезда */
  odometer_at_start: number
  /** Пробег по приезду */
  odometer_at_end: number
  /** Заправлено В литрах */
  fuel_filled: number
  /** Время прогрева В минутах */
  warmup_time: number
  /** Фактический расход топлива В литрах */
  actual_fuel_consumption: number
  /** Пробег В километрах */
  mileage: number
  /** Экономия/перерасход топлива */
  saving_overspending: number
  /** дополнительная информация */
  additional_info: string
  /** Место отправки */
  departure_place: number
  /** Механик на выезде */
  mechanic_at_start: number
  /** Механик на возвращении */
  mechanic_on_arrival: number
  /** норма расхода топлива ( НА БЭКЕ ПРОПАЛО ПОЛЕ) */
  normal_fuel_consumption: number
}

/** Норма расхода топлива по сезонам */
export interface SeasonFuelConsumptions {
  /** Норма расхода (лето) */
  summer_fuel_consumption: number
  /** Норма расхода (зима) */
  winter_fuel_consumption: number
}

/** Сортировка путевых листов */
export type OrderBy =
  'series ' /** По серии */
  | '-series ' /** По серии (убывание) */
  | 'number' /** По номеру */
  | '-number' /** По номеру (убывание) */
  | 'driver_first_name ' /** По имени водителя */
  | '-driver_first_name' /** По имени водителя (убывание) */
  | 'driver_last_name' /** По фамилии водителя */
  | 'driver_last_name' /** По фамилии водителя (убывание) */
  | 'driver_patronymic' /** По отчеству водителя */
  | '-driver_patronymic' /** По отчеству водителя (убывание) */
  | 'vehicle_manufacturer' /** По марке транспортного средства */
  | '-vehicle_manufacturer' /** По марке транспортного средства (убывание) */
  | 'vehicle_model' /** По модели транспортного средства */
  | '-vehicle_model' /** По модели транспортного средства (убывание) */
  | 'dt_from' /** По дате выезда */
  | '-dt_from' /** По дате выезда (убывание) */
  | 'dt_to ' /** По дате приезда */
  | '-dt_to ' /** По дате приезда (убывание) */
  | 'dt ' /** По дате путевого листа */
  | '-dt ' /** По дате путевого листа (убывание) */
