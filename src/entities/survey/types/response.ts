/** Ответ запроса повода */
export interface ReasonResponse {
  id: number
  name: string
  helping_form: string
}

/** Ответ запроса ответа */
export interface AnswerResponse {
  /** Уникальный ключ */
  id: number
  /** Значение */
  value: string
  /** Вопрос */
  question: number
  /** Следующий вопрос */
  next_question: {
    /** Уникальный ключ */
    id: number
    /** Текст вопроса */
    text: string
  } | null
  /** Повод обращения */
  reason: { /** Уникальный ключ */
    id: number
    /** Текст повода */
    name: string
    /** Форма помощи */
    helping_form: string
  } | null
}

/** Ответ запроса вопроса */
export interface QuestionResponse {
  /** Уникальный ключ */
  id: number
  /** Текст вопроса */
  text: string
  /** Массив ответов */
  answers: AnswerResponse[]

  /** Является ли первым вопросом опросника */
  is_first: boolean
}
