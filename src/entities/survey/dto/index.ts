import type { AnswerData, QuestionData } from '../types'
import type { AnswerResponse, QuestionResponse, ReasonResponse } from '../types/response'
import type { Answer, NextQuestion, Reason } from '@/shared/types/survey'

/** Повод */
class ReasonViewDTO {
  /** Уникальный ключ */
  id: number
  /** Текст повода */
  name: string
  /** Форма помощи */
  helpingForm: string

  constructor(reason: ReasonResponse) {
    this.id = reason.id
    this.name = reason.name
    this.helpingForm = reason.helping_form
  }
}

/** Следующий вопрос */
class NextQuestionViewDTO {
  /** Уникальный ключ */
  id: number
  /** Текст следующего вопроса */
  text: string

  constructor(nextQuestion: { id: number, text: string }) {
    this.id = nextQuestion.id
    this.text = nextQuestion.text
  }
}

/** Ответ */
class AnswerViewDTO {
  /** Уникальный ключ */
  id: number
  /** Значение */
  value: string
  /** Вопрос */
  question: number
  /** Следующий вопрос */
  nextQuestion: NextQuestion | null
  reasonOrQuestion: string
  /** Повод обращения */
  reason: Reason | null

  constructor(answer: AnswerResponse) {
    this.id = answer.id
    this.value = answer.value
    this.question = answer.question
    this.nextQuestion = answer.next_question ? new NextQuestionViewDTO(answer.next_question) : null
    this.reasonOrQuestion = answer.next_question ? 'nextQuestion' : 'reason'
    this.reason = answer.reason ? new ReasonViewDTO(answer.reason) : null
  }
}

/** Вопрос */
export class QuestionViewDTO {
  /** Уникальный ключ */
  id: number
  /** Текст вопроса */
  text: string
  /** Массив ответов */
  answers: Answer[]

  /** Является ли первым вопросом опросника */
  isFirst: boolean

  constructor(question: QuestionResponse) {
    this.id = question.id
    this.text = question.text
    this.answers = question.answers.map(answer => new AnswerViewDTO(answer))
    this.isFirst = question.is_first
  }
}

export class QuestionParamsDTO {

}

class AnswerDataDTO {
  /** Значение */
  value: string
  /** Следующий вопрос */
  next_question?: string
  /** Повод обращения */
  reason?: string

  constructor(form: AnswerData) {
    this.value = form.value
    this.next_question = form.nextQuestion
    this.reason = form.reason
  }
}
export class QuestionDataDTO {
  /** Текст вопроса */
  text: string
  /** Массив ответов */
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
  constructor(form: QuestionData) {
    this.text = form.text
    this.answers = form.answers.map(answer => new AnswerDataDTO(answer))
    this.is_first = form.isFirst
  }
}

export class AnswerDataToResponse {
  /** Уникальный ключ */
  id: number
  /** Значение */
  value: string
  /** Вопрос */
  question: number
  /** Следующий вопрос */
  nextQuestion?: string
  /** Повод обращения */
  reason?: string
  reasonOrQuestion?: 'nextQuestion' | 'reason'
  constructor(answer: any) {
    this.id = answer.id
    this.value = answer.value
    this.question = answer.question
    this.nextQuestion = answer.nextQuestion?.text
    this.reason = answer.reason?.name
    this.reasonOrQuestion = answer.nextQuestion ? 'nextQuestion' : 'reason'
  }
}
