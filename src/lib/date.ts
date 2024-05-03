import { format } from 'date-fns'

const humanDateTimeFormat = (iso: string): string => {
  try {
    const date = new Date(iso)
    return format(date, 'dd/MM/yyyy kk:mm:ss')
  } catch (error) {
    console.error(`Problem with date: '${iso}'`, error)
  }
  return 'Unknown'
}

const humanDateFormat = (iso: string): string => {
  const date = new Date(iso)
  return format(date, 'dd/MM/yyyy')
}

export { humanDateTimeFormat, humanDateFormat }
