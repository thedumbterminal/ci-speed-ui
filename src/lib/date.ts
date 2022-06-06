import { format } from 'date-fns'

const isoStringFormat = (iso: string): string => {
  const date = new Date(iso)
  return format(date, 'dd/MM/yyyy kk:mm:ss')
}

export { isoStringFormat }
