/** Параметры запроса за уведомлениями */
export interface RequestParams {
  /** Номер страницы */
  page: number
  /** Кол-во экземпляров сущности */
  per_page: number
}

/** Результат запроса за уведомлениями */
export interface RequestData {
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
  /** Кому */
  target: number
  /** Инцидент */
  incident: number
}

export interface WebsocketData {
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
  /** Требует действия */
  requires_action: boolean
  /** Инцидент */
  incident: number
}

export interface KindTypes {
  success: string[]
  error: string[]
  warning: string[]
}
