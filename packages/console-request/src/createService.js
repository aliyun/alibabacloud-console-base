/**
 * ----------------------------------------------------------
 *          * One-console 各类型 api 调用示例表 *
 * ----------------------------------------------------------
 * * api.json
 * createService('vpc', 'DescribeVpcs')
 * ----------------------------------------------------------
 * * multiApi.json
 * createService('vpc')
 * ----------------------------------------------------------
 * * innerApi.json
 * createService('vpc', 'DescribeVpcs', { apiType: 'inner' })
 * ----------------------------------------------------------
 * multiInnerApi.json（暂不支持）
 * createService('vpc', null, { apiType: 'inner' })
 * ----------------------------------------------------------
 * * call.json
 * createService('product', 'action', { apiType: 'app' })
 * ----------------------------------------------------------
 * multiCall.json（暂不支持）
 * createService('product', null, { apiType: 'app' })
 * ----------------------------------------------------------
 *
 */
import requestFactory from './request'

const defaultServiceOptions = {
  apiType: 'open',
  cors: false,
  catch: false,
  description: 'api-request',
  apiMockType: 'mocks',
}
const useMocks = ['localhost', '127.0.0.1'].includes(location.hostname)

function serviceFactory(options = {}, requestInstance) {
  const serviceOptions = {
    ...defaultServiceOptions,
    ...options,
  }

  if (typeof requestInstance === 'undefined') {
    // only use mocks in local dev development
    if (!useMocks) {
      requestInstance = requestFactory({
        interceptors: {
          consoleMock: false,
          consoleMockJsonFile: false,
        },
      })
    } else {
      if (serviceOptions.apiMockType === 'mocks') {
        requestInstance = requestFactory({
          interceptors: {
            consoleMockJsonFile: false,
          },
        })
      } else if (serviceOptions.apiMockType === 'json-files') {
        requestInstance = requestFactory({
          interceptors: {
            consoleMock: false,
          },
        })
      }
    }
  }

  return function createService(
    product,
    action,
    {
      apiType = serviceOptions.apiType,
      cors = serviceOptions.cors,
      catch: catchError = serviceOptions.catch,
      description,
    } = {}
  ) {
    if (!action) {
      return (actions) =>
        requestInstance({
          data: {
            product,
            actions,
          },
          apiType, // one-console 对应的接口类型
          useCors: cors, // 是否使用 fecs 提供的跨域接口
          ignoreError: !catchError, // 是否忽略 api 异常
          description: description || serviceOptions.description, // 当前请求的描述
        })
    }
    return (params, content) =>
      requestInstance({
        data: {
          product,
          action,
          params,
          content,
        },
        apiType,
        useCors: cors,
        ignoreError: !catchError,
        description: description || action,
      })
  }
}

const service = serviceFactory()
const corsService = serviceFactory({ cors: true })
const catchService = serviceFactory({ catch: true })
const catchCorsService = serviceFactory({ catch: true, cors: true })

export { serviceFactory, corsService, catchService, catchCorsService }

export default service
