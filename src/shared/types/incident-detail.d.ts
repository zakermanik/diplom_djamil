export interface IncidentDetail {
  active_of: any
  active_incidents: any[]
  address: Address
  brigade_kind_display: any
  assigned_brigades: any
  call_manager: any
  dc: string
  delay: any
  declarant: Declarant
  description: string
  double_incidents: any[]
  duplicate_incidents: any[]
  form110: any
  form110_status: any
  helping_form: string
  helping_form_display: string
  id: number
  incident_group: any[]
  is_causeless: any
  is_brigade_arrival_time_expired: any
  is_brigade_assignment_time_expired: any
  kind: string
  kind_display: string
  kind_transportation: string
  kind_transportation_display: string
  last_brigade_assignment: any
  location: any
  note_to_causeless: string
  patient: Patient
  reason: Reason
  repeated_incidents: any[]
  repeated_of: any
  result: string
  room: Room
  source: string
  status: string
  status_display: string
  substation_assignments: any[]
  transportation_address: any
  urgency: number
}

export interface Address {
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

export interface Declarant {
  name: string
  phone: string
}

export interface Patient {
  id: number
  special_groups: any[]
  last_name: string
  first_name: string
  patronymic: string
  phone: string
  birth: string
  gender: string
  insurance: string
  snils: string
  job: string
  note: string
  dc: string
  dm: string
  passport: any
  residence_address: any
  registration_address: any
  medical_insurance_organization: any
  special_group: any[]
}

export interface Reason {
  id: number
  name: string
  helping_form: string
}

export interface Room {
  id: number
  operators: any[]
  incident: number
}
