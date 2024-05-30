import type { Employe } from './employe'

/** Бригада */
export interface Brigade {
  /** Уникальный ключ */
  id: number
  /** Имя */
  name: string
  /** Тип бригады */
  kind: string
  /** Статус */
  status: string
  /** Вызовы, с которыми сейчас бригада работает */
  active_incidents: string
  head: null
  head_fullname: null
  substation: number
  shifts: []
  is_busy: boolean
  employees: Employe[]
  driver: number | null
  recent_incidents: RecentIncident[]
}

export interface RecentIncident {
  id: number
  address: Address
  helping_form: string
  reason: Reason
  result: string
  status: string
  urgency: number
}

interface Address {
  full_address: string
  intercom: string
  entrance: string
  floor: string
  additional_info: string
  longitude: string
  latitude: string
  fias_id: string
  region: string
  region_fias_id: string
  area_district: string
  area_district_fias_id: string
  city: string
  city_fias_id: string
  settlement: string
  settlement_fias_id: string
  city_district: string
  city_district_fias_id: string
  street: string
  street_fias_id: string
  house: string
  house_fias_id: string
  block: string
  block_fias_id: string
  flat: string
  flat_fias_id: string
  room: string
  room_fias_id: string
}

interface Reason {
  id: number
  name: string
  helping_form: string
}
