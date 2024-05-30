import { ElNotification } from 'element-plus'
import type { ElNotificationType } from '../types'

class NotificationService {
  error(message?: string, options?: { offset?: number, title?: string }) {
    ElNotification({
      message,
      type: 'error',
      offset: 50,
      ...options,
    })
  }

  warning(message?: string, options?: { offset?: number, title?: string }) {
    ElNotification({
      message,
      type: 'warning',
      offset: 50,
      ...options,
    })
  }

  success(message?: string, options?: { offset?: number, title?: string }) {
    ElNotification({
      message,
      type: 'success',
      offset: 50,
      ...options,
    })
  }

  warningWithoutTitle(message?: string) {
    ElNotification({
      message,
      offset: 50,
      type: 'warning',
    })
  }

  customNotification({ title, message, type }: ElNotificationType) {
    ElNotification({
      title,
      message,
      type,
    })
  }
}

export const notifyService = new NotificationService()
