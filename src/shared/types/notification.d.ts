/** Уведомления */
export interface Notification {
  /** уникальный ключ */
  id: number
  /** Заголовок */
  title: string
  /** Описание */
  description: string
  /** Вид уведомления */
  kind: string
  /** Дата создания */
  dc: string
  /** Прочитано */
  is_read: boolean
  /** Требует ли инцидент действия/внимания */
  requires_action: boolean
  /** Кому */
  target?: number
  /** Инцидент */
  incident: number
}
