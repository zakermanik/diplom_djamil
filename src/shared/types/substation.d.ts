/** Подстанции */
export interface Substation {
  /** Уникальный идентификатор */
  id: number
  /** Бригады подстанции */
  brigades: Brigade[]
  /** Наименование */
  name: string
  /** Адрес */
  address: string
}

/** Бригада */
export interface SubstationBrigade {
  /** Уникальный идентификатор */
  id: number
  /** Наименование */
  name: string
  /** Отображаемый вид */
  kind_display: string
  /** Отображаемый статус */
  status_display: string
  /** Свободна/не свободна бригада */
  is_busy: boolean
  state: string
  state_display: string
  status_display: string
}
