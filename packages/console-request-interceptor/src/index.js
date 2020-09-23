import {
  getSecToken,
  getUmid,
  getCollina,
  getFecsToken,
  getFecsUmid,
  getCurrentRegionId,
} from '@alicloud/one-console-utils'

// FECS 支持跨域的 CORS 请求
const CORS_BASE_URL = 'https://fecs.console.aliyun.com'
// 默认请求路径
const BASE_URL = '/'
// One-console 各类接口 url 映射表
const API_URL = {
  open: ['data/api.json', 'data/multiApi.json'],
  inner: ['data/innerApi.json', 'data/multiInnerApi.json'],
  app: ['data/call.json', 'data/multiCall.json'],
}

/**
 * Axios intercetor
 * One-console request pre-processor
 * @param {*} config
 */
function consoleRequestInterceptor(config) {
  // 如果传入了 url，且不在我们检查的 url 范围内，提前返回不作处理
  if (!isValidURL(config.url, config.apiType)) {
    return config
  }
  // 单或多接口调用
  const multi = isMulti(config.data)
  // 检查参数格式是否正确
  checkArguments(config.data, multi)

  let nextData
  // 补全缺省必填参数并修正参数格式
  nextData = fillExtraParams(config.data, config.useCors)
  // params 与 actions 需要 JSON.stringify
  nextData = formatData(nextData)

  // 返回新的 config 对象
  return {
    ...config,
    method: 'post', // 请求方法强制置为 'post'
    url: getURL(config.apiType, multi, config.description), // 获取请求 URL
    baseURL: config.useCors ? CORS_BASE_URL : BASE_URL,
    withCredentials: config.useCors ? true : false,
    data: nextData,
    requestStartTime: Date.now(),
  }
}

// 检查是否是合法的 url
function isValidURL(url, apiType = 'open') {
  const urls = API_URL[apiType]
  if (url && !urls.includes(url)) {
    return false
  }
  return true
}

// 解析请求的 api 类型
function isMulti(data) {
  // 如果参数中存在 actions 则判定为 multi 请求
  if (typeof data.actions !== 'undefined') {
    return true
  }
  return false
}

function getURL(apiType = 'open', multi, description) {
  const urls = API_URL[apiType]
  // 添加一个 url 参数方便调试
  if (description) {
    return `${multi ? urls[1] : urls[0]}?__action=${description}`
  }
  return `${multi ? urls[1] : urls[0]}`
}

// 获取 region 用于后端区分调用的 endpoint
function getRegion(data) {
  const multi = isMulti(data)
  if (!multi) {
    const { params: { RegionId } = {} } = data
    if (RegionId) {
      return RegionId
    }
  } else {
    const { actions } = data
    for (const action of actions) {
      const { params: { RegionId } = {} } = action
      if (RegionId) {
        return RegionId
      }
    }
  }
  return getCurrentRegionId()
}

// 必填缺省参数补全并格式化部分参数
function fillExtraParams(data, useCors) {
  return {
    ...data,
    sec_token: useCors ? getFecsToken() : getSecToken(),
    umid: useCors ? getFecsUmid() : getUmid(),
    collina: getCollina(),
    region: getRegion(data),
  }
}

function formatData(data) {
  const nextData = { ...data }
  // stringify `params`，`content` 与 `actions`
  if (nextData.params) {
    nextData.params = JSON.stringify(nextData.params)
  }
  if (nextData.content) {
    nextData.content = JSON.stringify(nextData.content)
  }
  if (nextData.actions) {
    nextData.actions = JSON.stringify(nextData.actions)
  }
  return nextData
}

// 检查参数
function checkArguments(data, multi) {
  if (multi) {
    checkArgumentsForMultiApi(data)
  } else {
    checkArgumentsForApi(data)
  }
}

// 检查单接口入参
function checkArgumentsForApi({ product, action }) {
  if (!product) {
    throw new Error("You must specify which product's api you want to call")
  }
  if (!action) {
    throw new Error('You must specify which api you want to call')
  }
}

// 检查多接口入参
function checkArgumentsForMultiApi({ product, actions }) {
  if (!product) {
    throw new Error("You must specify which product's api you want to call")
  }
  if (!Array.isArray(actions)) {
    throw new TypeError('Actions must be an array')
  }
  // loop through to check every action
  actions.forEach(({ action }) => {
    if (!action) {
      throw new Error(
        `You must specify which api you want to call.
        If you see this log, it's likely that you've forgot to specify an action
        property in your actions argument. Go for a double check.`
      )
    }
  })
}

export default consoleRequestInterceptor
