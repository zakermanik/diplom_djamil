import type { Address } from '@/shared/types/address'

/** Медицинская организация */
export interface MedicalOrganization {
  /** Уникальный ключ */
  id: number
  /** Адрес */
  address: Address & {
    fias_id: string
    city: string
    city_fias_id: string
    block: string
    block_fias_id: string
    room: string
    room_fias_id: string
  }
  /** Название */
  name: string
  /** Контакты */
  phone: string
  /** Код */
  code: string
}

export type OrderBy =
  'name ' /** По названию */
  | '-name ' /** По названию (убывание) */
