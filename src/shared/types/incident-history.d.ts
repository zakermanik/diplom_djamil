/** история инцидента */
export interface IncidentHistory {
  /** уникальный ключ */
  id: number
  /** id инцидена */
  object_id: number
  /** Действие */
  action: string
  /** Изменения */
  changes: {
    [key: string]: string[]
  }
  /** Дата изменения */
  timestamp: string
  /** Действие */
  object_repr: string
  /** Выполнил */
  actor: string
  /** Класс объекта */
  object_class: string
}
