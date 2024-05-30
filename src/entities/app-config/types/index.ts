/**
 * Интерфейс объекта настроек приложения
 */
export interface AppConfig {
  /** Адрес сокет-сервера */
  socket_server_url: string
  /** Адрес stun-сервера для телефонии */
  stun_server_url: string
  /** Адрес для WebRTC для телефонии */
  webrtc_url: string
  /** Порт для WebRTC для телефонии */
  webrtc_port: string
}
