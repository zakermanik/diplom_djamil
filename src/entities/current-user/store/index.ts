import { authService, currentUserService } from '../api'
import { setToken } from '@/shared/services/api/config'
import type { ErrorResponse } from '@/shared/types/api'
import type { LoginData } from '@/shared/types/auth'
import type { CurrentUser } from '@/shared/types/current-user'

export const useCurrentUserStore = defineStore('user-store', () => {
  const currentUser = ref<CurrentUser | undefined>(undefined)
  const isWorkWithCalls = ref(Boolean(localStorage.getItem('isWorkWithCalls')))
  const token = ref<string | null>(null)
  const error = ref<ErrorResponse | null>(null)
  const isLoading = ref(false)
  const router = useRouter()

  const handleAuth = async (data: LoginData) => {
    error.value = null
    isLoading.value = true
    try {
      const { data: response } = await authService.login(data)
      currentUser.value = response.user
      token.value = response.token || null
      localStorage.setItem('token', response.token || '')
      setToken(response.token as string)
    }
    catch (e: any) {
      error.value = e as ErrorResponse
    }
    finally {
      isLoading.value = false
    }
  }

  // const getUser = async () => {
  //   const { data } = await user.fetchUser()
  //   currentUser.value = data
  // }

  const logout = () => {
    isWorkWithCalls.value = false
    localStorage.removeItem('isWorkWithCalls')
    localStorage.removeItem('token')
    currentUser.value = undefined
    router.push({ name: 'Auth' })
  }

  const getCurrentUser = async () => {
    isLoading.value = true
    error.value = null
    try {
      const { data } = await currentUserService.getCurrentUser()
      currentUser.value = data
    }
    catch (error: any) {
      error.value = error
    }
    finally {
      isLoading.value = false
    }
  }

  const changeRole = async (role: string) => {
    isLoading.value = true
    error.value = null
    try {
      await currentUserService.changeRole(role)
      getCurrentUser()
    }
    catch (error: any) {
      error.value = error
    }
    finally {
      isLoading.value = false
    }
  }

  const setState = async (work_state: string) => {
    isLoading.value = true
    error.value = null
    try {
      await currentUserService.setState(work_state)
      getCurrentUser()
    }
    catch (error: any) {
      error.value = error
    }
    finally {
      isLoading.value = false
    }
  }

  function setStoreToken(value: string) {
    token.value = value
  }

  return {
    currentUser,
    isWorkWithCalls,
    token,
    error,
    isLoading,
    changeRole,
    setState,
    handleAuth,
    logout,
    getCurrentUser,
    setStoreToken,
  }
})
