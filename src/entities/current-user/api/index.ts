import { ENDPOINTS } from '../config'
import type { LoginData, LoginResponse } from '@/shared/types/auth'
import { makeRequest } from '@/shared/services/api'
import type { BaseResponse } from '@/shared/types/api'
import type { CurrentUser } from '@/shared/types/current-user'

class AuthApiService {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  login(data: LoginData) {
    return makeRequest<LoginResponse>({
      url: this.endpoint,
      method: 'POST',
      data,
    })
  }
}

class CurrentUserService {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getCurrentUser(): Promise<BaseResponse<CurrentUser>> {
    return makeRequest({ url: this.endpoint })
  }

  changeRole(changedRole: string) {
    return makeRequest({
      method: 'POST',
      url: `${this.endpoint}change_role/`,
      data: { role: changedRole },
    })
  }

  setState(work_state: string) {
    return makeRequest({
      method: 'POST',
      url: `${this.endpoint}set_work_state/`,
      data: { work_state },
    })
  }
}

export const authService = new AuthApiService(ENDPOINTS.AUTH)
export const currentUserService = new CurrentUserService(ENDPOINTS.CURRENT_USER)
