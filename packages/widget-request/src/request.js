import axios from 'axios'
import consoleMockInterceptor from '@alicloud/console-mock-interceptor'
import consoleRequestInterceptor from '@alicloud/console-request-interceptor'
import csrfTokenErrorInterceptor from '@alicloud/fecs-csrf-token-error-interceptor'
import searchParamsInterceptor from '@alicloud/search-params-interceptor'
import consoleResponseInterceptor from '@alicloud/console-response-interceptor'
import consoleRiskInterceptor from '@alicloud/console-risk-interceptor'

function requestFactory({
  /* eslint-disable no-unused-vars */
  interceptors: {
    searchParams,
    consoleMock,
    consoleRequest,
    consoleResponse,
    consoleRisk,
    fecsCsrfTokenError,
  } = {},
  /* eslint-enable no-unused-vars */
} = {}) {
  // Let's create an axios instance
  const request = axios.create()

  // hook the interceptors
  // Interceptors for request
  searchParams !== false &&
    request.interceptors.request.use(searchParamsInterceptor)
  consoleMock !== false &&
    request.interceptors.request.use(consoleMockInterceptor(consoleMock))
  consoleRequest !== false &&
    request.interceptors.request.use(consoleRequestInterceptor)

  // Interceptors for response
  fecsCsrfTokenError !== false &&
    request.interceptors.response.use(csrfTokenErrorInterceptor)
  consoleRisk !== false &&
    request.interceptors.response.use(consoleRiskInterceptor)
  consoleResponse !== false &&
    request.interceptors.response.use(consoleResponseInterceptor)

  return request
}

const defaultRequest = requestFactory()

export { requestFactory }

export default defaultRequest
