import axios from 'axios'
import qs from 'qs'

const DEFAULT_BASE = 'http://localhost:5000/api'
const URL_BASE = process.env.PUBLIC_API_BASE || DEFAULT_BASE

interface URLParams {
  [key: string]: string | number
}

interface ApiRequest {
  url: string
  params: URLParams
}

const absoluteURL = (path: string) => URL_BASE + path

class Api {
  static async get(request: ApiRequest) {
    try {
      const { data, headers } = await axios.get(absoluteURL(request.url), {
        params: request.params,
        withCredentials: true,
      })
      if (headers['content-type'] !== 'application/json') {
        throw new Error(
          `Invalid response content type: '${headers['content-type']}'`,
        )
      }
      return data
    } catch (error) {
      console.error('API error:', error)
    }
  }

  static simpleGet(path: string) {
    return Api.get({ url: path, params: {} })
  }

  static async post(request: ApiRequest) {
    const formData = qs.stringify(request.params)
    try {
      const { data } = await axios.post(absoluteURL(request.url), formData, {
        withCredentials: true,
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      })
      return data
    } catch (error) {
      console.error('API error:', error)
    }
  }

  static simplePost(path: string) {
    return Api.post({ url: path, params: {} })
  }
}

export { Api, absoluteURL }
