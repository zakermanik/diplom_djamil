import { ENDPOINTS } from '../config'
import type { TableData } from '@/shared/types/api'
import { BaseApiService, makeRequest } from '@/shared/services/api'
import type { Notification } from '@/shared/types/notification'
import { API_METHODS } from '@/shared/config/service'

class NotificationService<T, U = null> extends BaseApiService<T, U> {
  constructor(endpoint: string) {
    super(endpoint)
  }

  public markNotificationAsRead(NotificationId: number) {
    return makeRequest({
      url: `${this.endpoint}/${NotificationId}/mark_as_read/`,
      method: API_METHODS.CREATE,
    })
  }
}

export const notificationService = new NotificationService<TableData<Notification>>(ENDPOINTS.NOTIFICATION)
