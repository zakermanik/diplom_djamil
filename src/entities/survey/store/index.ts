import { surveyService } from '../api'
import { QuestionViewDTO } from '../dto'
import type { RequestData, RequestParams } from '../types'
import type { QuestionResponse } from '../types/response'
import { QuestionModel } from '../model'
import type { Answer, Question } from '@/shared/types/survey'
import { useBaseApiStore } from '@/shared/store/base'

export const useSurveyStore = defineStore('survey-store', () => {
  const store = useBaseApiStore<QuestionResponse, RequestParams, RequestData>(surveyService, new QuestionModel())
  const currentQuestion = ref<Question>({} as Question)
  const questions = computed(() => {
    return store.items.value.map(q => new QuestionViewDTO(q))
  })

  async function startSurvey() {
    const { data } = await surveyService.startSurvey()
    currentQuestion.value = new QuestionViewDTO(data)
    return data
  }

  async function changeCurrentQuestion(questionID: number) {
    const { data } = await surveyService.getOne(questionID)
    currentQuestion.value = new QuestionViewDTO(data)
  }

  function resetCurrentQuestion() {
    currentQuestion.value = {} as Question
  }

  async function removeAnswer(answer: Answer) {
    await surveyService.removeAnswer(answer.id)
      .then(() => {
        changeCurrentQuestion(answer.question)
      })
  }
  return {
    ...store,
    questions,
    currentQuestion,
    startSurvey,
    resetCurrentQuestion,
    changeCurrentQuestion,
    removeAnswer,
  }
})
