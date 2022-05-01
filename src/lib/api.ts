import axios, { AxiosResponse } from 'axios'

const DEFAULT_BASE = 'https://ci-speed.herokuapp.com'
const URL_BASE = process.env.REACT_APP_API_BASE || DEFAULT_BASE

interface URLParams {
  [key: string]: string | number
}

const api = {
  get: async (path: string, params: URLParams = {}) => {
    try {
      const { data } = await axios.get(URL_BASE + path, { params })
      return data
    } catch (error) {
      console.error('API error:', error)
    }
  }
}

export default api
