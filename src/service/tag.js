import baseURL from './index'
import Vue from 'vue'

const _getTagList = async () => {
  let result
  const req = {
    url: `${baseURL}/getTagList`,
    method: 'POST',
    data: {}
  }
  try {
    result = await Vue.prototype.$http(req)
  } catch (err) {
    Vue.prototype.$notify.error({
      title: '错误',
      message: '获取标签列表错误'
    })
    console.error(err)
  }
  return result
}

export { _getTagList }
