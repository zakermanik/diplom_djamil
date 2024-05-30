<script setup lang="ts">
import { useCurrentUserStore } from '@/entities/current-user'
import { QUESTIONS_ROUTES_NAMES } from '@/shared/router/routes'
import ExitIcon from '@/shared/assets/icons/ExitIcon.vue'

const currentUserStore = useCurrentUserStore()
const router = useRouter()

function handleChangeSelectedArm(armName: string) {
  if (armName === 'Создание')
    router.push({ name: QUESTIONS_ROUTES_NAMES.MAIN })
}

const defaultRoleArmNames = {
  main_doctor: [['QUESTIONS', 'Создание']],
}

const sortedArmNames = computed(() => {
  let sortedarmnames = {}
  const currentPath = router.currentRoute.value.path.replace('-', '_')
  const currentUserRole = currentUserStore.currentUser?.default_role

  if (currentUserRole && defaultRoleArmNames[currentUserRole as keyof typeof defaultRoleArmNames]) {
    sortedarmnames = Object.fromEntries(defaultRoleArmNames[currentUserRole as keyof typeof defaultRoleArmNames].filter(
      arm => !currentPath.includes(arm[0].toLowerCase()),
    ))
  }
  return sortedarmnames
})

function handleLogout() {
  currentUserStore.logout()
}
</script>

<template>
  <ElPopover placement="top" :width="300" trigger="click">
    <template #reference>
      <ElMenuItem
        class="text-[14px]/[22px] text-text_main"
      >
        <ElIcon>
          <ExitIcon />
        </ElIcon>
        <template #title>
          {{ currentUserStore.currentUser?.username }}
        </template>
      </ElMenuItem>
    </template>
    <div class="flex flex-col gap-2.5">
      <div v-for="armName in sortedArmNames" :key="armName">
        <ElButton plain text size="large" class="h-11 w-full text-base font-normal text-text_no_active" @click="handleChangeSelectedArm(armName)">
          <span>Перейти в АРМ</span>
          <span class="ml-1 w-[120px] truncate text-left">
            {{ armName }}
          </span>
          <ElIcon :size="24">
            <ArrowRight />
          </ElIcon>
        </ElButton>
        <ElDivider />
      </div>
      <ElButton type="info" plain class="ml-auto font-normal" @click="handleLogout">
        Выйти из системы
        <ElIcon :size="16">
          <ExitIcon />
        </ElIcon>
      </ElButton>
    </div>
  </ElPopover>
</template>

<style scoped>
.el-divider--horizontal {
  margin: 0;
}
</style>
