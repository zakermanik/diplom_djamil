export interface CurrentUser {
  brigade: null
  controlled_substations: number[]
  default_role: string
  default_role_display: string
  email: string
  extension_number: string
  first_name: string
  id: number
  last_name: string
  patronymic: string
  role: string
  role_display: string
  substation: null
  status: string
  work_state: UserState
  username: string
}

export type UserState = 'SHIFT_OFF' | 'SHIFT_ON' | 'ON_PAUSE' | 'ON_BREAK'
