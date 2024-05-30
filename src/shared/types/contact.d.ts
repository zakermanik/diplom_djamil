/** Контакты */
export interface Contact {
  /** уникальный ключ */
  id: number
  /** Имя */
  name: string
  /** Телефон */
  phone: string
  /** Описание контакта */
  description: string
  /** Приоритет */
  priority: number
  /** Тип */
  kind: null | ContactKind
  /** Адрес */
  address: string
  /** Пользователь */
  users: number
  /** Бригада */
  brigade: number
  /** Подстанция */
  substation: number
  /** Медицинская организация */
  medical_organization: number
}

export type ContactKind =
  'organization' /** организация */
  | 'other' /** другое */
