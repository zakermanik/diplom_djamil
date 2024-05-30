import { ENDPOINTS } from '../config'
import type { QuestionResponse } from '../types/response'
import type { BaseResponse } from '@/shared/types/api'
import { API_METHODS } from '@/shared/config/service'
import { BaseApiService, makeRequest } from '@/shared/services/api'

class SurveyApiService<T> extends BaseApiService<T> {
  constructor(endpoint: string) {
    super(endpoint)
  }

  public startSurvey(): Promise<BaseResponse<T>> {
    return makeRequest({
      url: `${this.endpoint}/start_survey`,
      method: API_METHODS.GET,
    })
  }

  public removeAnswer(id: number): Promise<BaseResponse<T>> {
    return makeRequest<T>({
      url: `/survey/answers/${id}/`,
      method: API_METHODS.DELETE,
    })
  }
}

export const surveyService = new SurveyApiService<QuestionResponse>(ENDPOINTS.QUESTION)
