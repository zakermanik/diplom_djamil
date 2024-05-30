import type { IncidentKind } from '@/entities/incident/types'

export const INCIDENT_KINDS: { [key: string ]: IncidentKind } = {
  /** Первичный */
  PRIMARY: 'PRIMARY',
  /** Повторный */
  REPEATED: 'REPEATED',
  /** Дублированный */
  DUPLICATE: 'DUPLICATE',
  /** Задвоенный */
  DOUBLE: 'DOUBLE',
  /** Попутный */
  FOLLOWING: 'FOLLOWING',
  /** Амбулаторный */
  AMBULATORY: 'AMBULATORY',
  /** Актинвый */
  ACTIVE: 'ACTIVE',
  /** ЧС */
  EMERGENCY: 'EMERGENCY',
}

export const INCIDENT_KINDS_DISPLAY = {
  /** Первичный */
  PRIMARY: 'Первичный',
  /** Повторный */
  REPEATED: 'Повторный',
  /** Дублированный */
  DUPLICATE: 'Дублированный',
  /** Задвоенный */
  DOUBLE: 'Задвоенный',
  /** Попутный */
  FOLLOWING: 'Попутный',
  /** Амбулаторный */
  AMBULATORY: 'Амбулаторный',
  /** Актинвый */
  ACTIVE: 'Активный',
  /** ЧС */
  EMERGENCY: 'ЧС',
}

export const INCIDENT_KINDS_OPTIONS: { id: number, value: IncidentKind, label: string }[] = [
  { id: 1, value: 'PRIMARY', label: 'Первичный' },
  { id: 2, value: 'REPEATED', label: 'Повторный' },
  { id: 3, value: 'DUPLICATE', label: 'Дублированный' },
  { id: 4, value: 'DOUBLE', label: 'Задвоенный' },
  { id: 5, value: 'FOLLOWING', label: 'Попутный' },
  { id: 6, value: 'AMBULATORY', label: 'Амбулаторный' },
  { id: 7, value: 'ACTIVE', label: 'Активный' },
  { id: 8, value: 'EMERGENCY', label: 'ЧС' },
]
