<script setup lang="ts">
import ArrowLeftIcon from '@/shared/assets/icons/ArrowLeftIcon.vue'
</script>

<template>
  <ElButton link @click="$router.go(-1)">
    <ElIcon size="18px" class="ml-0.5 text-[#409EFF]">
      <ArrowLeftIcon />
    </ElIcon>
    <span class="text-[13px]/[20px] font-normal text-text_primary hover:text-text_no_active">Назад</span>
  </ElButton>
</template>
