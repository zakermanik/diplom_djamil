/**
 * Утиль создания URL для получения записи звонка
 * @param call_id - ID звонка
 * @returns URL записи звонка
 */
export function defineCallRecordUrl(call_id: number) {
  const { origin, hostname } = window.location
  const mapUrl = {
    local: `${import.meta.env.VITE_BASE_URL}`,
    prod: `${origin}`,
  }
  return `${hostname === 'localhost' ? `https://${mapUrl.local}` : mapUrl.prod}`
    + `/backend/incidents/get_streaming_incident_call_record/`
    + `?call_id=${call_id}&token=${localStorage.getItem('token')}`
}
