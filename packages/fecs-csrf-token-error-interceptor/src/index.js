import axios from 'axios'
import { URLSearchParams } from '@alicloud/search-params-interceptor'

const axiosInstance = axios.create()

async function getNewCsrfToken() {
  const response = await axiosInstance({
    url: '/data/refreshToken',
    baseURL: 'https://fecs.console.aliyun.com/',
    timeout: 5000,
    withCredentials: true,
  })

  return response && response.data && response.data.data
}

async function csrfTokenErrorInterceptor(response) {
  const { data: responseData, config } = response

  // 只处理跨域请求的 'CsrfTokenError' 错误
  if (config.useCors && responseData.code === 'CsrfTokenError') {
    // 刷新 token
    const fecsCsrfToken = await getNewCsrfToken()
    // Token 刷新后，再次执行原本的请求
    let newResponse = null
    // 拿出请求参数
    const {
      config: { data: reqDataString, url: reqUrl, method: reqMethod },
    } = response
    const reqData = new URLSearchParams(reqDataString)
    // 使用新的 token
    reqData.set('sec_token', fecsCsrfToken)

    // 发送请求
    try {
      newResponse = await axiosInstance({
        method: reqMethod,
        url: reqUrl,
        data: reqData,
        withCredentials: true,
      })
    } catch (err) {
      // 如果此次出错，停止处理，直接返回上一次的请求结果
      return response
    }

    const { data: newResponseData } = newResponse
    // 如果还是 CsrfTokenError，说明刷新失败或系统错误，返回上一次请求结果
    if (newResponseData.code === 'CsrfTokenError') {
      return response
    }
    // 如果是其他的情况则表示处理 CsrfTokenError 成功，返回新的请求结果
    return newResponse
  }

  // 非 CsrfTokenError 的情况不在此拦截器处理范围，直接返回
  return response
}

export default csrfTokenErrorInterceptor
