import type { RouteRecordRaw } from 'vue-router'
import { QUESTIONS_ROUTES } from './routes/questions'
import AuthPage from '@/pages/Auth'
import { MAIN_ROUTE_NAMES } from '@/shared/router/routes'

const additionalRoutes: RouteRecordRaw[] = [
  ...QUESTIONS_ROUTES,
]

const routes: readonly RouteRecordRaw[] = [
  {
    path: '/auth',
    name: MAIN_ROUTE_NAMES.AUTH,
    component: AuthPage,
    meta: {
      title: 'auth',
    },
  },
  {
    path: '/arm-redirect',
    name: MAIN_ROUTE_NAMES.ARM_REDIRECT,
    component: () => import('@/pages/ArmRedirect'),
  },
  ...additionalRoutes,
]

export default routes
