import Vue from 'vue'
import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3031'
  : 'http://test.cherryblog.site:3030'

  
Vue.prototype.$http = axios

axios.interceptors.response.use(
  res => {
    if (/^2/.test(res.status)) {
      return res.data
    } else {
      throw new Error(res.data.message)
    }
  },
  err => {
    if (err.response) {
      throw new Error(err.response.data.message || '服务器错误')
    } else if (err.request) {
      throw new Error('网络环境太差，请稍后再试')
    }
    throw new Error(err)
  }
)
export default baseURL
