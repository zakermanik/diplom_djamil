<script setup lang="ts">
import { QUESTIONS_ROUTES_NAMES } from '@/shared/router/routes'
import { useCurrentUserStore } from '@/entities/current-user'

const currentUserStore = useCurrentUserStore()
const router = useRouter()

function redirectToArm(armName: string) {
  if (armName === 'ГВ')
    router.push({ name: QUESTIONS_ROUTES_NAMES.SURVEY })
  else router.push({ name: QUESTIONS_ROUTES_NAMES.SURVEY })
}

switch (currentUserStore.currentUser?.default_role) {
  case 'main_doctor':
    redirectToArm('ГВ')
    break
  default:
    redirectToArm('Автопарк')
}
</script>

<template>
  <RouterView />
</template>
