import axios, { AxiosResponse } from 'axios'
import qs from 'qs'

const DEFAULT_BASE = 'http://localhost:5000/api'
const URL_BASE = process.env.REACT_APP_API_BASE || DEFAULT_BASE

interface URLParams {
  [key: string]: string | number
}

const absoluteURL = (path: string) => URL_BASE + path

const api = {
  get: async (path: string, params: URLParams = {}) => {
    try {
      const { data } = await axios.get(absoluteURL(path), {
        params,
        withCredentials: true,
      })
      return data
    } catch (error) {
      console.error('API error:', error)
    }
  },

  post: async (path: string, params: URLParams = {}) => {
    const formData = qs.stringify(params)
    try {
      const { data } = await axios.post(absoluteURL(path), formData, {
        withCredentials: true,
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      })
      return data
    } catch (error) {
      console.error('API error:', error)
    }
  },
}

export { api, absoluteURL }
