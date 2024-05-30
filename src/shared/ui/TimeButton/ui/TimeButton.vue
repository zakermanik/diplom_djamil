<script setup>
import TimeNavIcon from '@/shared/assets/icons/TimeNavIcon.vue'
</script>

<template>
  <ElButton
    type="primary"
    round
  >
    <p class="text-[14px]/[22px] font-normal">
      <slot />
    </p>
    <ElIcon :size="14" class="ml-1">
      <TimeNavIcon />
    </ElIcon>
  </ElButton>
</template>
