export const INCIDENT_STATUSES = {
  NEW: 'NEW',
  ACCEPTED_CALL_MANAGER: 'ACCEPTED_CALL_MANAGER',

  ASSIGNED_SENIOR_DOCTOR: 'ASSIGNED_SENIOR_DOCTOR',
  ACCEPTED_SENIOR_DOCTOR: 'ACCEPTED_SENIOR_DOCTOR',

  ASSIGNED_SECTOR: 'ASSIGNED_SECTOR',
  ACCEPTED_SECTOR: 'ACCEPTED_SECTOR',

  ASSIGNED_SUBSTATION: 'ASSIGNED_SUBSTATION',
  ACCEPTED_SUBSTATION: 'ACCEPTED_SUBSTATION',

  ASSIGNED_BRIGADE: 'ASSIGNED_BRIGADE',
  ACCEPTED_BRIGADE: 'ACCEPTED_BRIGADE',

  COMPLETED: 'COMPLETED',
}

export const INCIDENT_RESULT_STATUSES = {
  WAITING_SIGN: 'WAITING_SIGN',
  SIGNED: 'SIGNED',
  TRANSFERRED_TO_MO: 'TRANSFERRED_TO_MO',
  REFUSED: 'REFUSED',
  CAUSELESS: 'CAUSELESS',
  DUPLICATE: 'DUPLICATE',
  DOUBLE: 'DOUBLE',
}

export const INCIDENT_RESULT_STATUSES_DISPLAY = {
  WAITING_SIGN: 'Ожидает ЭЦП',
  SIGNED: 'Подписан ЭЦП',
  TRANSFERRED_TO_MO: 'Передан в МО',
  REFUSED: 'Отказ заявителя',
  CAUSELESS: 'Необоснованный вызов',
  DUPLICATE: 'Дубль',
  DOUBLE: 'Задвоенный',
}

export const INCIDENT_FORM_STATUSES = {
  BRIGADE_COMPLETION: 'BRIGADE_COMPLETION',
  SENIOR_DOCTOR_APPROVAL: 'SENIOR_DOCTOR_APPROVAL',
  SIGNED: 'SIGNED',
}

export const INCIDENT_FORM_STATUSES_DISPLAY = {
  BRIGADE_COMPLETION: 'В работе бригады',
  SENIOR_DOCTOR_APPROVAL: 'Подтверждение СВ',
  SIGNED: 'Подписан ЭЦП',
}