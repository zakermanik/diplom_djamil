import type { Waybill } from './waybill'

type FuelGrade = 'AI-92' | 'AI-95' | 'AI-98' | 'AI-100' | 'Diesel fuel' | 'Electricity' | 'Propane' | 'Methane'

/** Приход ГСМ */
export interface FuelSupply {
  /** уникальный ключ */
  id: number
  /** путевой лист */
  waybill: Waybill
  /** Марка топлива */
  fuel_grade: FuelGrade
  /** Количество топлива в литрах */
  fuel_amount: number
  /** Дополнительная информация */
  additional_information: string
  /** Стоимость */
  cost: string
  /** Дата прихода */
  dt: string
  /** Поставщик */
  provider: number
}

/** Техническое обслуживание */
interface Maintenance {
  /** уникальный ключ */
  id: number
  /** Время начала обслуживания  */
  dt_from: string
  /** Время завершения обслуживания */
  dt_to: string
  /** уникальный ключ транспортного средства */
  vehicle: number
}

/** Водитель */
interface Driver {
  /** уникальный ключ */
  id: number
  /** Водительское удостоверение */
  driver_license: Driverlicense
  /** Медицинский сертификат  */
  medical_certificate: Medicalcertificate
  /** Пасспорт */
  passport: Passport
  /** Адрес */
  address: Address
  /** Имя */
  first_name: string
  /** Фамилия */
  last_name: string
  /** Отчество */
  patronymic: string
  /** Дата рождения */
  birthday: string
  /** Номер телефона */
  phone: string
  /** СНИЛС */
  snils: string
}

/** Адрес */
interface Address {
  /** */
  id: number
  /** город */
  city: string
  /** улица */
  street: string
  /** дом */
  house: string
  /** квартира */
  flat: string
  /** Подъезд */
  entrance: string
  /** этаж */
  floor: string
  /** долгота */
  longitude: string
  /** широта */
  latitude: string
  /** является подстанцией */
  is_substation: boolean
}

/** Пасспорт */
interface Passport {
  /** уникальный ключ */
  id: number
  /** серия */
  series: number
  /** номер */
  number: number
  /** дата выдачи */
  dt: string
}

/** Медицинский сертификат */
interface Medicalcertificate {
  /** уникальный ключ id */
  id: number
  /** Дата начала действия сертификата */
  dt_from: string
  /** Дата окончания действия сертификата */
  dt_to: string
}

/** Водительское удостоверение */
interface Driverlicense {
  /** уникальный ключ */
  id: number
  /** Дата окончания действия водительского удостоверения */
  dt_to: string
  /** Серия */
  series: number
  /** Номер */
  number: number
  /** Дата начала действия водительского удостоверения */
  dt_from: string
  /** Категории водительского удостоверения */
  driver_license_types: number[]
}
