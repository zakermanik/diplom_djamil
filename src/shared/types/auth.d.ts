export interface LoginResponse {
  is_valid: boolean
  token?: string
  user?: User
}
export interface LoginData {
  username: string
  password: string
}
