/** Общая модель адреса */
export interface Address {
  full_address: string
  flat: string
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
  flat_fias_id: string
}
