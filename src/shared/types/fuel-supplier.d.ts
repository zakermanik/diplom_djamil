import type { Address } from '@/shared/types/address'

/** Поставщик топлива */
export interface FuelSupplier {
  /** Уникальный ключ */
  id: number
  /** Адресс */
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
  /** Номер телефона */
  phone: string
}
