import defaultOptions from './defaultOptions'
import handleDoubleConfirm from './handleDoubleConfirm'

const { code } = defaultOptions

async function consoleRiskInterceptor(response) {
  const { data: responseData } = response
  /* eslint-disable no-case-declarations, no-console */
  switch (responseData.code) {
  case code.doubleConfirm:
    try {
      const newResponse = await handleDoubleConfirm(response)
      return newResponse
    } catch (e) {
      console.error('[handleDoubleConfirm] failed: ', e.message)
      return response
    }
  case code.forbidden:
    return response
  default:
    return response
  }
}

export default consoleRiskInterceptor
