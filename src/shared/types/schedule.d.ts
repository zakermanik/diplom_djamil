import type { Driver } from './driver'
import type { Vehicle } from './vehicle'

export interface Schedule {
  driver: Driver
  vehicle: Vehicle
  dt_from: string
  dt_to: string
  id: number | null
}
