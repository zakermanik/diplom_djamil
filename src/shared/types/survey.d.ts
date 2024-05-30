/** Повод */
export interface Reason {
  /** Уникальный ключ */
  id: number
  /** Текст повода */
  name: string
  /** Форма помощи */
  helpingForm: IncidentHelpingForm
}

/** Следующий вопрос */
export interface NextQuestion {
  /** Уникальный ключ */
  id: number
  /** Текст вопроса */
  text: string
}

/** Ответ */
export interface Answer {
  /** Уникальный ключ */
  id: number
  /** Значение */
  value: string
  /** Вопрос */
  question: number
  /** Следующий вопрос */
  nextQuestion: NextQuestion | null
  /** Повод обращения */
  reason: Reason | null
}

/** Вопрос */
export interface Question {
  /** Уникальный ключ */
  id: number
  /** Текст вопроса */
  text: string
  /** Массив ответов */
  answers: Answer[]
  /** Является ли первым вопросом опросника */
  isFirst: boolean
}
