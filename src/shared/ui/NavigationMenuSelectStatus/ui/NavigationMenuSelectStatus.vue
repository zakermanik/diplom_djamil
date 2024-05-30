<script setup lang="ts">
import { USER_STATES_OPTIONS } from '@/shared/config/current-user'
import { useCurrentUserStore } from '@/entities/current-user'

const currentUserStore = useCurrentUserStore()

const userState = ref<string>(currentUserStore.currentUser?.work_state ?? '')

async function setUserState(work_state: string) {
  await currentUserStore.setState(work_state)
}
</script>

<template>
  <div class="flex h-14 w-60 items-center justify-center">
    <ElSelect
      v-model="userState"
      class="w-[200px]"
      @change="setUserState"
    >
      <ElOption
        v-for="state in USER_STATES_OPTIONS"
        :key="state.id"
        :label="state.label"
        :value="state.value"
      />
    </ElSelect>
  </div>
</template>
