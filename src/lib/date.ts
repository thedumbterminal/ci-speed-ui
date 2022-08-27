import { format } from 'date-fns'

const humanDateTimeFormat = (iso: string): string => {
  const date = new Date(iso)
  return format(date, 'dd/MM/yyyy kk:mm:ss')
}

const humanDateFormat = (iso: string): string => {
  const date = new Date(iso)
  return format(date, 'dd/MM/yyyy')
}

export { humanDateTimeFormat, humanDateFormat }
