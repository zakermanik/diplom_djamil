/** Болезнь */
export interface Disease {
  /** Уникальный ключ */
  id: number
  /** Название */
  disease: string
  /** Код */
  code: string
  /** Номер группы */
  disease_group: number
}

export type OrderBy =
  'disease ' /** По названию */
  | '-disease ' /** По названию (убывание) */
