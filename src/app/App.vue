<script setup lang="ts">
import { setToken } from '@/shared/services/api/config'
import { useCurrentUserStore } from '@/entities/current-user'
import { useAppConfigStore } from '@/entities/app-config'

const currentUserStore = useCurrentUserStore()
const appConfigStore = useAppConfigStore()
const showApp = ref(false)

const callSound = ref<HTMLAudioElement | null>(null)

const token = localStorage.getItem('token')

async function initApp(token: string) {
  setToken(token)
  await currentUserStore.getCurrentUser()
  await appConfigStore.getAppConfig()
  currentUserStore.setStoreToken(token)
  showApp.value = true
}

if (token)
  initApp(token)
else
  showApp.value = true
</script>

<template>
  <RouterView v-if="showApp" />
  <ModalsContainer />

  <audio ref="callSound" src="" autoplay volume="1.0" />
</template>
