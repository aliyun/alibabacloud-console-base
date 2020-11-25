// import alert from './alert'
import APILogger from './logger'

function consoleResponseInterceptor(response) {
  // Init a logger and send api log to sls server.
  const logger = new APILogger()
  logger.log(response)

  const { data: apiResponseData } = response
  const {
    config: { ignoreError },
  } = response
  if (
    // Single api succeeded -> code 200, withFailedRequest undefined
    // Multi api succeeded  -> code 200, withFailedRequest false
    apiResponseData.code === '200' &&
    apiResponseData.withFailedRequest !== true
  ) {
    return apiResponseData.data
  } else if (
    // Multi api with failed request
    apiResponseData.code === '200' &&
    apiResponseData.withFailedRequest === true
  ) {
    const error = new Error('Multi OpenAPI calls with failed request.')
    error.response = response
    if (!ignoreError) {
      // alert(apiResponseData)
      throw error
    }
    return apiResponseData
  } else if (apiResponseData.message) {
    // Single api failed with an error message
    const error = new Error(apiResponseData.message)
    error.response = response
    if (!ignoreError) {
      // alert(apiResponseData)
      throw error
    }
    return apiResponseData
  } else {
    // Single api failed without an error message
    const error = new Error('OpenAPI failed without a message.')
    error.response = response
    if (!ignoreError) {
      // alert({
      //   ...apiResponseData,
      //   message: error.message,
      // })
      throw error
    }
    return apiResponseData
  }
}

export default consoleResponseInterceptor
