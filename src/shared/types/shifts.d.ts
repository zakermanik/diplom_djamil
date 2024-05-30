export interface Shifts {
  // Уникальный номер смены
  id: number
  // Водитель
  driver: {
    // Уникальный номер водителя
    id: number
    // Имя
    first_name: string
    // фамилия
    last_name: string
    // Отчество
    patronymic: string
    // День рождение
    birthday: string
    // Номер телефона
    phone: string
    // СНИЛС
    snils: string
  }
  // Транспортное средство
  vehicle: {
    // Уникальный номер транспортного средства
    id: number
    // Государственынй номер
    number: string
    // Марка
    manufacturer: string
    // Модель
    model: string
    // Серия ПТС
    pts_series: string
    // Номер ПТС
    pts_number: number
    // VIN-Номер
    vin_number: string
    // Летний расход топлива по норме
    summer_fuel_consumption: number
    // Зимний расход топлива по норме
    winter_fuel_consumption: number
    // Норма расхода с кондиционером
    with_air_conditioning: number
  }
  // Время начала смены
  dt_from: string
  // Время завершения смены
  dt_to: string
}
