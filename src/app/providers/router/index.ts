import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { MAIN_ROUTE_NAMES } from '@/shared/router/routes'
import { useCurrentUserStore } from '@/entities/current-user'
import { ROLES } from '@/shared/config/roles'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')
  const currentUserStore = useCurrentUserStore()

  if (to.path === '/')
    next({ name: MAIN_ROUTE_NAMES.AUTH })
  if (!token && to.name !== MAIN_ROUTE_NAMES.AUTH)
    next({ name: MAIN_ROUTE_NAMES.AUTH })
  if (token && to.name === MAIN_ROUTE_NAMES.AUTH) {
    await currentUserStore.getCurrentUser()
    if ([ROLES.CALL_MANAGER || ROLES.SENIOR_DOCTOR].includes(currentUserStore.currentUser?.role ?? ''))
      next({ name: MAIN_ROUTE_NAMES.DEVICE_SETTINGS })
    else next({ name: MAIN_ROUTE_NAMES.ARM_REDIRECT })
  }
  else { next() }
})

export default router
