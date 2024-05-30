export interface ShiftForm {
  shifts: {
    id: number | Date
    times: [Date, Date]
    date: Date
  }[]
}
