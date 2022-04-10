import { ParsedUrlQuery } from 'querystring'

const getQueryValue = (query: ParsedUrlQuery, field: string): string|undefined => {
  const value = query[field]
  if(Array.isArray(value)) return value.shift()
  return value
}

export default getQueryValue
