import { notificationService } from '../api'
import type { KindTypes, RequestData, RequestParams } from '../types'
import type { Notification } from '@/shared/types/notification'
import { useBaseApiStore } from '@/shared/store/base'
import type { NotificationWebsocketData } from '@/entities/notification'
import { notifyService } from '@/shared/services/notify/notify'

export const useNotificationsStore = defineStore('notification-store', () => {
  const store = useBaseApiStore<Notification, RequestParams, RequestData>(notificationService)
  const kinds = ref<KindTypes>({ // Нужно заполнять по мере появления новых типов,
    success: ['CALL_ENDED', 'FORM_110_APPROVED', 'BRIGADE_ACCEPT'],
    error: ['BRIGADE_REJECT', 'FORM_110_NOT_APPROVED'],
    warning: ['EMERGENCY', 'NEW_INCIDENT', 'HOSPITALIZATION_REQUEST', 'FORM_110_REQUEST'],
  })

  async function addNewNotification(data: NotificationWebsocketData) {
    let notificationType
    for (const type in kinds.value) {
      if (kinds.value[type as keyof KindTypes].includes(data.kind))
        notificationType = type
    }

    store.items.value.unshift({
      ...data,
    })
    notifyService.customNotification({ title: data.title, message: data.description, type: notificationType || '' })// Если type = '', значит его нет в массиве kinds. Надо добавить
  }

  async function markNotificationAsRead(id: number) {
    await notificationService.markNotificationAsRead(id)
    const itemIndex = store.items.value.findIndex(notification => notification.id === id)
    if (itemIndex !== -1)
      store.items.value[itemIndex].is_read = true
  }

  async function getReverseAll() {
    const notifications = await notificationService.getAll()
    store.items.value = notifications.data.results.reverse()
  }
  return {
    ...store,
    kinds,
    notifications: store.items,
    addNewNotification,
    getReverseAll,
    markNotificationAsRead,
  }
})
