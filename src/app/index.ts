import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './styles/tailwind/base.postcss'
import ElementPlus from 'element-plus'
import ru from 'element-plus/es/locale/lang/ru'

import './styles/index.scss'
import 'element-plus/dist/index.css'

import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'
import VueTheMask from 'vue-the-mask'
import VueApexCharts from 'vue3-apexcharts'
import App from './App.vue'
import { router } from './providers'
import 'vue-final-modal/style.css'
import './styles/tailwind/index.postcss'

export const app
= createApp(App)
  .use(createPinia())
  .use(createVfm())
  .use(router)
  .use(ElementPlus, { locale: ru })
  .use(VueTheMask)
  .use(VueApexCharts)

for (const [key, component] of Object.entries(ElementPlusIconsVue))
  app.component(key, component)
