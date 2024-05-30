/** Поставщик топлива */
export interface FuelProvider {
  /** уникальный ключ */
  id: number
  /** имя */
  name: string
}

/** Поля для сортировки */
export type OrderBy =
  'name ' /** По названию */
  | '-name ' /** По названию (убывание) */
