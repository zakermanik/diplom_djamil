import type { RouteRecordRaw } from 'vue-router'
import { QUESTIONS_ROUTES_NAMES } from '@/shared/router/routes'
import MainPage from '@/pages/Questions/Main'

export const QUESTIONS_ROUTES: RouteRecordRaw[] = [
  {
    path: '/questions',
    name: QUESTIONS_ROUTES_NAMES.MAIN,
    redirect: '/questions/survey',
    component: MainPage,
    children: [
      {
        path: '/questions/survey',
        name: QUESTIONS_ROUTES_NAMES.SURVEY,
        component: () => import('@/pages/Questions/Survey'),
      },
    ],
  },
]
