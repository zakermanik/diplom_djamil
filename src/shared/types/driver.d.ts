import type { Address } from './address'
import type { Passport } from './passport'
import type { DriverLicense } from './driver-license'
import type { MedicalCertificate } from './medical-certificate'

/** Водитель */
export interface Driver {
  /** уникальный ключ */
  id: number
  /** Водительские права */
  driver_license: DriverLicense
  /** Медицинский сертификат */
  medical_certificate: MedicalCertificate
  /** Паспорт */
  passport: Passport
  /** Адрес */
  address: Address & { is_substation: boolean }
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
