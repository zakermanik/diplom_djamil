/** Параметры запроса */
export interface RequestParams {
}

/**  Данные запроса */
export interface RequestData {
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
}

/**  Данные запроса для Ответа под camelCase */
export interface AnswerData {
  /** Уникальный ключ */
  id?: number
  /** Значение */
  value: string
  /** Вопрос */
  question: number
  /** Следующий вопрос */
  nextQuestion?: string
  /** Повод обращения */
  reason?: string
  reasonOrQuestion?: 'nextQuestion' | 'reason'
}

/**  Данные запроса Вопроса под camelCase */
export interface QuestionData {
  /** Текст вопроса */
  text: string
  /** Ответы */
  answers: AnswerData[]
  /** Является ли первым вопросом опросника */
  isFirst: boolean
}
