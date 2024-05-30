import { appConfigService } from '../api'
import type { AppConfig } from '../types'

export const useAppConfigStore = defineStore('app-config-store', () => {
  /** Конфиг приложения */
  const appConfig = ref<AppConfig | null>(null)
  const error = ref<any>(null)
  const isLoading = ref<boolean>(false)

  /** Функция получения настроек приложения */
  async function getAppConfig() {
    error.value = null
    isLoading.value = true
    try {
      const { data } = await appConfigService.getAppConfig()
      return appConfig.value = data
    }
    catch (e) {
      error.value = e
    }
    finally {
      isLoading.value = false
    }
  }

  return { appConfig, getAppConfig, isLoading, error }
})
