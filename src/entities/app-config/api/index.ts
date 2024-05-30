import { ENDPOINTS } from '../config'
import type { AppConfig } from '../types'
import { makeRequest } from '@/shared/services/api'

class AppConfigService {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAppConfig() {
    return makeRequest<AppConfig>({
      url: this.endpoint,
      method: 'GET',
    })
  }
}

export const appConfigService = new AppConfigService(ENDPOINTS.APP_CONFIG)
