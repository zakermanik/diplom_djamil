<script setup lang="ts">
interface Props {
  disabledCreateButton?: boolean
}

const { disabledCreateButton } = defineProps<Props>()
const emits = defineEmits<{
  (e: 'openCreateForm'): void
}>()
</script>

<template>
  <div class="flex items-center justify-end gap-2.5 rounded bg-white shadow p-3">
    <ElButton
      type="primary"
      :disabled="disabledCreateButton"
      @click="$emit('openCreateForm')"
      class="hover:bg-blue-600"
    >
      <p class="font-normal">
        Создать вопрос
      </p>
    </ElButton>
  </div>
</template>
