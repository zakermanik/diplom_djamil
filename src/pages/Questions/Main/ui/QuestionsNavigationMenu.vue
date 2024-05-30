<script setup lang="ts">
import { useCurrentUserStore } from '@/entities/current-user'
import { MAIN_ROUTE_NAMES, QUESTIONS_ROUTES_NAMES } from '@/shared/router/routes'
import SelectArmPopover from '@/shared/ui/SelectArmPopover'

const router = useRouter()
const route = useRoute()
const currentUserStore = useCurrentUserStore()

const activePage = ref<string>()

function handleGoTo(name: string) {
  if (name === MAIN_ROUTE_NAMES.AUTH)
    currentUserStore.logout()

  activePage.value = name
  router.push({ name })
}

function defineActivePage() {
  if (route.path.includes('survey'))
    activePage.value = QUESTIONS_ROUTES_NAMES.SURVEY
}

onMounted(() => {
  defineActivePage()
})
</script>

<template>
  <ElMenu
    :default-active="activePage"
    class="bg-white flex !h-screen flex-col shadow-md"
    @select="handleGoTo"
  >
    <h2 class="text-blue-600 flex h-[70px] w-[240px] items-center p-5 text-[22px] font-medium">
      Опросник
    </h2>
    <ElMenuItem :index="QUESTIONS_ROUTES_NAMES.SURVEY" class="text-gray-800 hover:text-blue-600">
      Список вопросов
    </ElMenuItem>
    <div class="mt-auto">
      <ElDivider />
      <SelectArmPopover />
    </div>
  </ElMenu>
</template>

<style lang="scss" scoped>
.el-menu {
  border-right: 0px;
}

.el-divider--horizontal {
  margin: 0px 0;
}
</style>
