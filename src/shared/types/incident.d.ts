import type { Patient } from './patient'
import type { IncidentSubstation } from './incident_substation'
import type { User } from './user'
import type { IncidentAddress } from '@/entities/incident'
import type { Reason } from '@/entities/reference/reason/types'

export type IncidentKind =
  'PRIMARY'
  | 'REPEATED'
  | 'DUPLICATE'
  | 'DOUBLE'
  | 'FOLLOWING'
  | 'AMBULATORY'
  | 'ACTIVE'
  | 'EMERGENCY'

export type IncidentHelpingForm =
  'emergency'
  | 'urgent'

export type IncidentResultStatus =
  'WAITING_SIGN'
  | 'SIGNED'
  | 'TRANSFERRED_TO_MO'
  | 'REFUSED'
  | 'CAUSELESS'
  | 'DUPLICATE'
/** Статусы инцидента */
export type IncidentStatus =
  'NEW' /** Поступил */
  | 'ACCEPTED_CALL_MANAGER' /** Принят диспетчером приёма вызовов */
  | 'ASSIGNED_SENIOR_DOCTOR' /** Передан старшему врачу */
  | 'ACCEPTED_SENIOR_DOCTOR' /** Принят старшим врачом */
  | 'ASSIGNED_SECTOR' /** Передан диспетчеру направлений */
  | 'ACCEPTED_SECTOR' /** Принят диспетчером направлений */
  | 'ASSIGNED_SUBSTATION' /** Передан диспетчеру подстанции */
  | 'ACCEPTED_SUBSTATION' /** Принят диспетчером подстанции */
  | 'ASSIGNED_BRIGADE' /** Передан бригаде */
  | 'ACCEPTED_BRIGADE' /** Выезд бригады */
  | 'COMPLETED' /** Закрыт */

/** Виды источника */
export type SourceType =
  'CALL' /** Телефонный звонок */
  | 'MANUAL' /** Ручное создание */

/** Виды перевозки */
export type KindTransportation =
  'IMMEDIATE' /** Экстренная */
  | 'PLANNING' /** Плановая */

export type HelpingForm = 'emergency' | 'urgent' | 'other'

/** Инцидент */
export interface Incident {
  /** Инцидент привязанный к активному вызову */
  active_of: ActiveOfInterface | null
  /** уникальный ключ */
  id: number
  number: string
  form_status: string
  /** Вид */
  kind: string
  /** Адрес талона для отображения */
  address_display: string
  /** Дата создания талона */
  dc: string
  /** ID формы 110/у */
  form110: number
  /** Статус формы 110/у */
  form110_status: string
  /** Вид отображения */
  kind_display: string
  /** Вид (состав) бригады */
  brigade_kind: {
    id: number
    name: string
  } | null
  brigade_kind_display: string
  /** Вид (состав) бригады для отображения */
  /** Пациент */
  patient: Patient | null
  patient_fio: string
  /** Заявитель */
  declarant: Declarant
  /** Место вызова */
  location: number | string
  /** Причина инцидента */
  reason?: IncidentReason | null
  /** Повторный вызов */
  recall_of: IncidentShort
  /** Источник */
  source: SourceType
  /** Статус результата обращения при завершении */
  result: string
  /** Статус состояния вызов */
  status: string
  /** Отображение статуса */
  status_display: string
  /** Статус */
  status: IncidentStatus
  /** Группы инцидента */
  incident_group: {
    address_display: string
    call_manager_display: string
    description: string
    id: number
    is_recall: boolean
    patient: null | Patient
    reason: null | Reason
    source: string
    substation_assignments: IncidentSubstation[]
  }[]
  /** Оператор */
  operator: User
  /** Адрес */
  address: IncidentAddress
  /** Адрес куда повезут кого-то */
  transportation_address: IncidentAddress | null
  /** Повторный вызов */
  is_recall: boolean
  /** Инцидент подстанции */
  incident_substations: IncidentSubstation[]
  /** Форма помощи */
  helping_form: string
  /** Форма помощи для отображения на русском языке */
  helping_form_display: string
  /** Срочность */
  urgency: number | null
  /** Вид перевозки */
  kind_transportation: KindTransportation | null
  /** Отображение вида перевозки */
  kind_transportation_display: string
  /** Необоснованный вызов */
  is_causeless: boolean
  /** Комментарий к необоснованному вызову */
  note_to_causeless: string
  /** Дополнительное описание вызова */
  description: string
  /** Комната чата */
  room: Room
  /** Связанные инциденты */
  related_incidents: RelatedIncident[]
  /** Превышено время реагирования на вызов */
  is_brigade_arrival_time_expired: boolean | null
  /** Превышено время передачи вызова бригаде */
  is_brigade_assignment_time_expired: boolean | null
  /** Дублированные инциденты */
  duplicate_calls: DuplicateRepeatedCall[]
  /** Повторные инциденты */
  repeated_calls: DuplicateRepeatedCall[]
  /** Диспетчер */
  call_manager: CallManager
  /** Последняя назначеная бригада на вызов */
  last_brigade_assignment: IncidentLastBrigadeAssignment
  /** Назначенная бригада */
  assigned_brigades: string[]
  /** Форма 110 */
  form110: number
  /** Время отсрочки вызова бригаде */
  delay: string | null
  /** Первичный инцидент */
  primary_incident: number | null
  /** Наличие трупов */
  is_death: boolean
  /** Форма помощи, указанная в причине вызова */
  reason_helping_form: string
}

export interface CallManager {
  id: number
  current_brigade: any
  controlled_substations: number[]
  default_role: string
  email: string
  extension_number: string
  first_name: string
  fullname: string
  last_name: string
  patronymic: string
  role: string
  speciality: any
  substation: number
  status: string
  username: string
  contacts: any[]
  address: any
  passport: any
}

export interface IncidentLastBrigadeAssignment {
  arrival_time: null
  brigade: number
  completed_time: null
  creator: number
  dc: string
  delay: null
  departure_time: null
  dm: string
  hospital_arrival_time: null
  id: number
  incident: number
  rejection_time: null
  return_to_station_time: null
  status: string
  status_change_dt: string
  transportation_start_time: null
}

interface RelatedIncident {
  kind: IncidentKind
  /** уникальный ключ */
  id: number
  /** Отображение адреса */
  address_display: string
  /** Отображение диспетчера */
  call_manager_display: string
  /** Описание */
  description: string
  /** Назначения подстанций */
  substation_assignments: IncidentSubstation[]
  /** Пациент */
  patient: string
  /** Причина инцидента */
  reason: IncidentReason
  /** Статус результата обращения при завершении */
  result: IncidentResultStatus
  /** Источник */
  source: SourceType
  /** Статус */
  status: IncidentStatus
  /** Превышено время реагирования на вызов */
  is_brigade_arrival_time_expired: boolean | null
  /** Превышено время передачи вызова бригаде */
  is_brigade_assignment_time_expired: boolean | null
  dc: string
  form110_status: string | null
  brigade_kind_display: string | null
  urgency: number | null
  patient: string
  /** Наличие трупов */
  is_death: boolean
}

/** Интерфейс комнаты чата в инциденте */
interface Room {
  id: number
  incident: number
  operators: Operator[]
}

/** Интерфейс операторов чата */
interface Operator {
  id: number
  role: string
  username: string
  phone: string | null
}

export interface IncidentLocation {
  id: number
  name: string
}
export interface IncidentReason {
  id: number
  name: string
  helping_form: HelpingForm
}

/** Общий интерфейс с полями id и name */
export interface IdName {
  /** уникальный ключ */
  id: number
  /** Наименование */
  name: string
}

/** Заявитель */
export interface Declarant {
  /** Имя */
  name?: string
  /** Телефон */
  phone?: string
  /** Спец. клиент */
  is_special_client?: boolean
}

/** Повторный вызов */
export interface IncidentShort {
  /** уникальный ключ */
  id: number
  /** Источник */
  source: SourceType
  /** Отображение оператора */
  operator_display: string
  /** Пациент */
  patient: string
  /** Повторный вызов */
  is_recall: boolean
  /** Описание */
  description: string
  /** Отображение адреса */
  address_display: string
  /** Инцидент подстанции */
  incident_substations: IncidentSubstation[]
  /** Причина инцидента */
  reason: IdName
}

export interface ActiveOfInterface {
  address_display: string
  brigade_kind_display: string
  call_manager_display: string
  dc: string
  delay: string
  description: string
  form110_status: string
  id: number
  is_brigade_arrival_time_expired: boolean
  is_brigade_assignment_time_expired: boolean | null
  kind: string
  patient: string
  reason: Reason
  result: string
  source: string
  status: string
  substation_assignments: IncidentSubstation[]
  urgency: number
}
/** Сортировка инцидентов */
export type OrderBy =
  'call_manager__patronymic' /** По отчеству диспетчера */
  | '-call_manager__patronymic' /** По отчеству диспетчера (убыв) */
  | 'call_manager_first_name' /** По имени диспетчера */
  | '-call_manager_first_name' /** По имени диспетчера (убыв) */
  | 'call_manager_last_name' /** По фамилии диспетчера */
  | '-call_manager_last_name' /** По фамилии диспетчера (убыв) */
  | 'dc' /** По дате */
  | '-dc' /** По дате (убыв) */
  | 'helping_form' /** По форме */
  | '-helping_form' /** По форме (убыв) */
  | 'id' /** По уникальному ключу */
  | '-id' /** По уникальному ключу (убыв) */
  | 'kind' /** По виду */
  | '-kind' /** По виду (убыв) */
  | 'patient_lastname' /** По фамилии пациента */ // ---------> По неймингу с бэка у пациента 2 фамилии
  | '-patient_lastname' /** По фамилии пациента (убыв) */
  | 'patient_name' /** По имени пациента */
  | '-patient_name' /** По имени пациента (убыв) */
  | 'patient_surname' /** По отчеству пациента */
  | '-patient_surname' /** По отчеству пациента (убыв) */
  | 'profile_name' /** По профилю */
  | '-profile_name' /** По профилю (убыв) */
  | 'reason' /** По причине */
  | '-reason' /** По причине (убыв) */
  | 'status' /** По статусу */
  | '-status' /** По статусу (убыв) */
  | 'urgency' /** По срочности */
  | '-urgency' /** По срочности (убыв) */
  | 'number' /** По номеру */
  | '-number' /** По номеру (убыв) */
