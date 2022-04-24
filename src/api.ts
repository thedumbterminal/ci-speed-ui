import axios, { AxiosResponse } from 'axios'

const URL_BASE = 'https://ci-speed.herokuapp.com'

interface URLParams {
  [key: string]: string | number
}

const api = {
  get: async (path: string, params: URLParams = {}) => {
    const { data } = await axios.get(URL_BASE + path, { params })
    return data
  }
}

export default api
