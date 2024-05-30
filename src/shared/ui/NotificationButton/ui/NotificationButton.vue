<script setup lang='ts'>
import NotificationBell from '@/shared/assets/icons/NotificationBell.vue'

interface Props {
  isShowDot?: boolean
}
const { isShowDot } = defineProps<Props>()
</script>

<template>
  <ElBadge class="flex" :is-dot="isShowDot">
    <ElButton class="h-min border-none p-0">
      <ElIcon size="18">
        <NotificationBell />
      </ElIcon>
    </ElButton>
  </ElBadge>
</template>

<style lang="scss" scoped>
:deep(.el-badge__content) {
height: 6px;
width: 6px;
}
</style>
