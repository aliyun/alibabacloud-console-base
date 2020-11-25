import getConsoleConfig from './getConsoleConfig'

export const STATIC_API = 'STATIC_API'
const getStaticApiResult = (key) => {
  const staticApiResults = getConsoleConfig(STATIC_API)
  const result = staticApiResults[key]
  if (!result) {
    throw new ReferenceError(
      `You might have forgot to config "${key}" in your ${STATIC_API}`
    )
  }
  if (result.code && result.code == '200' && result.data) {
    return result.data
  } else {
    throw new Error(`Failed at getStaticApiResult(${key})`)
  }
}

export default getStaticApiResult
