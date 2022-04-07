import axios from 'axios'

const URL_BASE = 'https://ci-speed.herokuapp.com'

const api = {
  get: async (path: string) => {
    const { data } = await axios.get(URL_BASE + path)
    return data
  }
}

export default api
