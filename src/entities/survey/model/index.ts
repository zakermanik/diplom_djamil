import type { RequestData } from '../types'
import type { Answer } from '@/shared/types/survey'

export class AnswerModel {
  /** Значение */
  value: string
  /** Следующий вопрос */
  next_question?: string
  /** Повод обращения */
  reason?: string
  constructor() {
    this.value = ''
    this.next_question = ''
    this.reason = ''
  }
}
export class QuestionModel implements RequestData {
  /** Текст вопроса */
  text: string
  /** Ответы */
  answers: {
    /** Значение */
    value: string
    /** Следующий вопрос */
    next_question?: string
    /** Повод обращения */
    reason?: string
  }[]

  /** Является ли первым вопросом опросника */
  is_first: boolean
  constructor() {
    this.text = ''
    this.answers = Array(1).fill({} as Answer[]).map(() => new AnswerModel())
    this.is_first = false
  }
}
