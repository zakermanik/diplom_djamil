export interface RouteTask {
  /** Уникальный ключ */
  id: number
  /** ФИО заказчика */
  patient: string
  /** Дата и время выезда */
  receive_dt: stirng
  /** Дата и время прибытия */
  dt_completed: string
  /** Дата и время возвращения */
  arrival_dt: string
  /** Пройденный путь */
  distance: number
  /** Время прогрева */
  idle_time: number
  /** Дополнительная информация */
  additional_information: string
  /** Дополнительное место отправки */
  additional_departure_address: string
  /** Уникальный ключ путевого листа */
  waybill: number
  /** Место отправки */
  departure_address: DepartureAddress
  /** Место доставки */
  destination: Destination
  /** Расход по норме */
  consumption_rate: string
}

interface DepartureAddress {
  id: number
  full_address: string
  intercom: string
  entrance: string
  floor: string
  additional_info: string
  longitude: string
  latitude: string
  region: string
  region_fias_id: string
  area_district: string
  area_district_fias_id: string
  settlement: string
  settlement_fias_id: string
  city_district: string
  city_district_fias_id: string
  street: string
  street_fias_id: string
  house: string
  house_fias_id: string
  flat: string
  flat_fias_id: string
  is_substation: boolean
}

interface Destination {
  id: number
  full_address: string
  intercom: string
  entrance: string
  floor: string
  additional_info: string
  longitude: string
  latitude: string
  region: string
  region_fias_id: string
  area_district: string
  area_district_fias_id: string
  settlement: string
  settlement_fias_id: string
  city_district: string
  city_district_fias_id: string
  street: string
  street_fias_id: string
  house: string
  house_fias_id: string
  flat: string
  flat_fias_id: string
  is_substation: boolean
}
