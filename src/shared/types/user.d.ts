export interface User {
  /** Идентификатор */
  id: number
  /** Имя */
  first_name: string
  /** Фамилия */
  last_name: string
  /** Отчество */
  patronymic: string
  /** субстанция */
  substation: number | null
  /** Ф.И.О. */
  fullname: string
  /** Почта */
  email: string
  /** Статус */
  status: string
  /** Юзернейм */
  username: string
  /** Явялется ли суперюзером */
  is_superuser: boolean
  /** добавочный номер */
  extension_number: number | null
  /** Постоянная роль */
  default_role: string
  /** отображение постоянной роли */
  default_role_display: string | null
  /** Роль */
  role: string | null
  /** Ролевой показ??? */
  role_display: string | null
  /** Контроллируемые субстанции */
  controlled_substations: []
  /** Номер бригады */
  brigade: null | number
  /** Контакты пользователя */
  contacts?: [
    {
      phone: string
    },
  ]
}

/** Сортировка пользователей */
export type OrderBy =
  'first_name ' /** По имени */
  | '-first_name ' /** По имени (убывание) */
  | 'last_name' /** По фамилии */
  | '-last_name' /** По фамилии (убывание) */
  | 'patronymic' /** По отчеству */
  | '-patronymic' /** По отчеству (убывание) */
  | 'role' /** По роли */
  | '-role' /** По роли (убывание) */
