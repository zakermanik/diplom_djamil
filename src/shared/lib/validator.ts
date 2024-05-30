/**
 * Класс валидатор формы(ElFrom) для сбора повторяемых валидаций и упрощения жизни
 */
export class ElementValidator {
  /**
   *
   * @param from дата с
   * @param to дата по
   * @returns возвращает валидатор, для елементовской формы, которая принимает правила, значение формы, и callback
   */
  dates(from: string, to: string) {
    return (rules: any, value: any, callback: any) => {
      if (rules?.required && !value)
        callback(new Error('Обязательное поле'))
      else if ((!from && to) || (!to && from))
        callback()
      else if (to < from)
        callback(new Error('Некорректное значение'))
      else callback()
    }
  }
}

export const Validator = new ElementValidator()
