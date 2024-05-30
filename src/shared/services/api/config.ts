import axios from 'axios'

const csrfHeader = { 'X-CSRFToken': localStorage.getItem('token') }

export function setToken(newToken: string | null) {
  axios.defaults.headers.common.Authorization = newToken ? `Token ${newToken}` : ''
  newToken ? localStorage.setItem('token', newToken) : clearToken()
}

function clearToken() {
  localStorage.removeItem('token')
}

const mapUrl = {
  local: `${import.meta.env.VITE_APP_API_URL}`,
  prod: `${window.location.origin}/backend`,
}

const apiBaseURL = window.location.hostname === 'localhost' ? mapUrl.local : mapUrl.prod

axios.defaults.baseURL = apiBaseURL

axios.interceptors.response.use(
  response => response,
  (error) => {
    console.error(error)
    if (error.response?.status === 401 || error.response?.status === 403)
      clearToken()

    return Promise.reject(error)
  },
)

export default {
  csrfHeader,
  setToken,
  clearToken,
}
