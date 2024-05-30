/** Пациент */
export interface Patient {
  /** уникальный ключ */
  id: number

  special_groups: PatientSpecialGroup[]
  /** Полное имя */
  first_name: string
  last_name: string
  patronymic: string
  /** Номер телефона */
  phone: string
  /** Пол */
  gender: string
  /** Дата рождения */
  birth: string
  /** Доп. информация */
  note: string
  /** Страховой полис */
  insurance: string
  snils: string
  /** Место работы */
  job: string
  /** Дата создания пациента */
  dc: string
  /** Дата последнего изменения */
  dm: string
  passport: number
  /** Адрес постоянного места жительства */
  residence_address: number
  /** Адрес регистрации по месту пребывания */
  registration_address: number
  /** Страховая медицинская организация */
  medical_insurance_organization: number
  /** Группы специального учёта */
  special_group: number[]
}

export interface PatientSpecialGroup {
  id: number
  group_name: string
  comment: string
  group: number
}
