import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { ENDPOINTS } from '../config'
import { useCurrentUserStore } from '../store'

describe('глобальное хранилище пользователя', () => {
  const axiosMockAdapter = new MockAdapter(axios)

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('наличие значения error при получении ошибки с сервера', async () => {
    // Arrange
    axiosMockAdapter.onPost(ENDPOINTS.AUTH).networkError()
    const userStore = useCurrentUserStore()

    // Act
    expect(userStore.error).toBe(null)
    await userStore.handleAuth({ username: '', password: '' })

    // assert
    expect(userStore.error).not.toBe(null)
  })

  // переработал логику работы  данного модуля, данный тест не актуален, оставил для примера!
  // it('пеенаправление пользователя на основную страницу Main при корректно введенным данным', async () => {
  //   axiosMockAdapter
  //     .onPost(ENDPOINTS.AUTH)
  //     .reply(200, { is_valid: true })
  //   const userStore = useCurrentUserStore()

  //   await userStore.handleAuth({ username: 'test', password: 'test' })

  //   expect(mockPush).toHaveBeenCalledWith({
  //     name: ROUTER_NAMES.DEVICE_SETTINGS,
  //   })
  // })
})
