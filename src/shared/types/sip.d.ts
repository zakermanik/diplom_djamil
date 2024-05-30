/** Интерфейс звонящего */
export interface ICallerInfo {
  /** Номер телефона из SIP'a */
  phone: string
}

/** Интерфейс описывающий состояние соединения */
export interface ICallInfo {
  direction: CallDirection | null
  status: CallStatus | null
  /** ID последнего инцидента для входящего номера */
  latest_incident_id: number | null

  setDirection: (callDirection: CallDirection) => void
  removeDirection: () => void
  setStatus: (status: CallStatus) => void
  removeStatus: () => void
  setIncidentID: (incident_id: number) => void
  removeIncidentID: () => void
}

/** Направленность соединения */
export type CallDirection = 'incoming' | 'outgoing'

/** Состояние соединения */
export type CallStatus = 'progress' | 'peerconnection' | 'connecting' | 'sending' | 'accepted' | 'confirmed' | 'ended' | 'failed'
