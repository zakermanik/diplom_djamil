import type { EmployeAddress, EmployeContact, EmployePassport, EmployeSpeciality } from '@/entities/employe/types'

/** Сотрудник */
export interface Employe {
  /** Уникальный ключ */
  id: number
  /** Логин */
  username: string
  /** Пароль */
  password: string
  /** Имя */
  firstName: string
  /** Фамилия */
  lastName: string
  /** Отчество */
  patronymic: string
  /** Номер телефона */
  contacts: EmployeContact[]
  /** Паспорт */
  passport: EmployePassport
  /** Адрес */
  address: EmployeAddress
  /** Должность */
  defaultRole: string
  /** ID Специальности, если выбрана роль "Бригада" */
  specialityId: string
  /** Специальность сотрудника */
  speciality: EmployeSpeciality
}

export type OrderBy =
  'username' /** По логину */
  | '-username' /** По логину (убывание) */
  | 'fullName' /** По ФИО */
  | '-fullName' /** По ФИО (убывание) */
  | 'contacts' /** По ФИО */
  | '-contacts' /** По ФИО (убывание) */
