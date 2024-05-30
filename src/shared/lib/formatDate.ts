import moment from 'moment'

function formatDateMoment(date: string | Date, format: string) {
  return moment(date).format(format)
};

export { formatDateMoment }
