import baseURL from './index'
import Vue from 'vue'

const _getArticleList = async ({ queryParams }) => {
  let result
  const req = {
    url: `${baseURL}/getArticleList`,
    method: 'POST',
    data: queryParams
  }
  try {
    result = await Vue.prototype.$http(req)
  } catch (err) {
    Vue.prototype.$notify.error({
      title: '错误',
      message: '获取文章列表错误'
    })
    console.error(err)
  }
  return result
}

export { _getArticleList }
