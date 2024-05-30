<script setup lang="ts">
import { useModal } from 'vue-final-modal'
import { formatDateMoment } from '@/shared/lib/formatDate'
import SuccessIcon from '@/shared/assets/icons/SuccessIcon.vue'
import RoundWarningIcon from '@/shared/assets/icons/RoundWarningIcon.vue'
import ErrorIcon from '@/shared/assets/icons/ErrorIcon.vue'
import CheckIconBlue from '@/shared/assets/icons/CheckIconBlue.vue'
import type { Notification } from '@/shared/types/notification'
import { useNotificationsStore } from '@/entities/notification'
import { useCurrentUserStore } from '@/entities/current-user'
import CommentRejectModal from '@/features/incident/transfer/ui/CommentRejectModal.vue'

interface Props {
  visible: boolean
  buttonRef: any
  data?: object
}

const { visible, buttonRef } = defineProps<Props>()
const emits = defineEmits<{
  (e: 'closePopover'): void
}>()

const notificationStore = useNotificationsStore()
const currentUserStore = useCurrentUserStore()
const router = useRouter()
const route = useRoute()
const { kinds } = storeToRefs(notificationStore)
const isSubstationDirectionManager = currentUserStore.currentUser?.default_role === 'substation_manager'

function defineActiveIcon(type: string) {
  if (kinds.value.error.includes(type))
    return ErrorIcon
  else if (kinds.value.success.includes(type))
    return SuccessIcon
  else
    return RoundWarningIcon
}

function defineDotColor(item: Notification) {
  if (item.is_read && !item.requires_action)
    return '#D5E7FB'
  else if (item.is_read) // При любом отказе требуется действие
    return '#E6A23C'
  else return '#F56C6C'
}

onMounted(async () => {
  await notificationStore.getReverseAll()
})

function handleGoToIncident(incidentID: number) {
  if (route.matched[0].path === '/call-manager')
    router.push({ path: `${route.matched[0].path}/received-calls/incident-detail/${incidentID}` })
  else
    router.push({ path: `${route.matched[0].path}/active-incidents/incident-detail/${incidentID}` })
}

function handleCheckNotification(id: number) {
  const item = notificationStore.notifications.find(notification => notification.id === id)
  if (item)
    notificationStore.markNotificationAsRead(item.id)
}

const { open: openRejectCallModal, close: closeRejectCallModal, patchOptions } = useModal({
  component: CommentRejectModal,
  attrs: {
    onClose() {
      closeRejectCallModal()
    },
  },
})

function handleOpenRejectModel() {
  patchOptions({
    attrs: {},
  })
  openRejectCallModal()
  emits('closePopover')
}
</script>

<template>
  <ElPopover
    :visible="visible"
    :virtual-ref="buttonRef"
    width="633px"
    placement="bottom"
    popper-class="max-h-[500px] !p-5 !pb-0 !ml-[15px]"
  >
    <div class="flex items-center justify-between">
      <h3 class="text-[18px]/[26px] font-normal text-text_primary">
        Уведомления
      </h3>
      <ElIcon
        :size="16"
        color="#606266"
        class="cursor-pointer"
        @click="emits('closePopover')"
      >
        <Close />
      </ElIcon>
    </div>
    <ElScrollbar
      v-if="notificationStore.notifications.length" :max-height="444" class="mt-2.5 w-[593px]"
      view-class="w-[577px]"
    >
      <ElTimeline class="pl-px">
        <ElTimelineItem
          v-for="notification in notificationStore.notifications"
          :key="notification.id"
          :timestamp="formatDateMoment(notification.dc, 'YYYY-MM-DD HH:mm')"
          :color="defineDotColor(notification)"
          placement="top"
        >
          <template #default>
            <ElCard>
              <div class="flex items-center justify-between">
                <div class="flex justify-start gap-2.5">
                  <ElIcon size="24">
                    <component :is="defineActiveIcon(notification.kind)" />
                  </ElIcon>
                  <div class="flex flex-col gap-2">
                    <h4 class="text-[18px]/[26px] font-normal">
                      {{ notification.title }}
                    </h4>
                    <span>
                      {{ notification.kind === 'EMERGENCY' ? 'Первичный вызов: ' : '' }} <!-- Инциденты с типом "ЧС" будут первичными вызовами -->
                      <ElLink
                        type="primary"
                        class="font-normal"
                        :underline="false"
                        @click="() => handleGoToIncident(notification.incident)"
                      >
                        №КТ {{ notification.incident }}
                      </ElLink>
                    </span>
                    <span v-if="notification.description" class="text-[14px]/[22px] text-text_no_active">{{ notification.description }}</span>
                  </div>
                </div>
                <div class="flex min-w-[179px] flex-col items-start gap-2.5">
                  <ElLink v-if="!notification.is_read" type="primary" :underline="false" class="text-[12px]-[18px] h-8" @click="handleCheckNotification(notification.id)">
                    Отметить прочитанным
                    <template #icon>
                      <ElIcon class="!mb-[1.5px] !ml-[2px]" size="12">
                        <CheckIconBlue />
                      </ElIcon>
                    </template>
                  </ElLink>
                  <ElLink v-if="isSubstationDirectionManager && notification.kind === 'NEW_INCIDENT'" type="danger" :underline="false" class="text-[12px]-[18px] h-8" @click="handleOpenRejectModel">
                    Отказаться
                    <template #icon>
                      <ElIcon class="!mb-[1.5px] !ml-[2px]" size="12">
                        <Close />
                      </ElIcon>
                    </template>
                  </ElLink>
                </div>
              </div>
            </ElCard>
          </template>
        </ElTimelineItem>
      </ElTimeline>
    </ElScrollbar>
    <div v-else class="mb-5 mt-2.5">
      <span>Нет уведомлений</span>
    </div>
  </ElPopover>
</template>

<style lang="scss" scoped>
:deep(.el-card__body) {
  padding: 12px 16px;
}
</style>
