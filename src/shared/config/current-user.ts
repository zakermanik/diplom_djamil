import type { UserState } from '@/shared/types/current-user'

export const USER_STATES: { [key: string ]: UserState } = {
  /** Не на смене */
  SHIFT_OFF: 'SHIFT_OFF',
  /** На смене */
  SHIFT_ON: 'SHIFT_ON',
  /** На паузе */
  ON_PAUSE: 'ON_PAUSE',
  /** На перерыве */
  ON_BREAK: 'ON_BREAK',
}

export const USER_STATES_DISPLAY = {
  /** Не на смене */
  SHIFT_OFF: 'Не на смене',
  /** На смене */
  SHIFT_ON: 'На смене',
  /** На паузе */
  ON_PAUSE: 'На паузе',
  /** На перерыве */
  ON_BREAK: 'На перерыве',
}

export const USER_STATES_OPTIONS = [
  { id: 1, label: 'Не на смене', value: 'SHIFT_OFF' },
  { id: 2, label: 'На смене', value: 'SHIFT_ON' },
  { id: 3, label: 'На паузе', value: 'ON_PAUSE' },
  { id: 4, label: 'На перерыве', value: 'ON_BREAK' },
]
