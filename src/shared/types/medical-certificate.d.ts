/** Медицинский сертификат */
export interface MedicalCertificate {
  /** уникальный ключ id */
  id: number | null
  /** Дата начала действия сертификата */
  dt_from: string
  /** Дата окончания действия сертификата */
  dt_to: string
  /** Водитель */
  driver: number | null
}
