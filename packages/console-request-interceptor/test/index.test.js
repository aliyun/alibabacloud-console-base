import consoleRequestInterceptor from '../src/index'
import docCookies from '../src/docCookies'
import {
  config,
  correctApi,
  incorrectApi,
  correctMultiApi,
  edgeCase1,
  edgeCase2,
  apiWithoutProduct,
  apiWithoutAction,
  multiApiWrongAction,
  multiApiWithoutProduct,
  multiApiWithoutActionInActions,
} from './mocks/config'

const riskInfo = {
  UMID: 'Ye1d3501eb576724dbe3381dc4147f9f0',
  GETUA: function(){
    let tmp_ua_mock = Date.now()
    return tmp_ua_mock
  } 
}

beforeAll(() => {
  global['RISK_INFO'] = riskInfo
  global['ALIYUN_CONSOLE_CONFIG'] = {
    'SEC_TOKEN': 'FMAnoDl2xZ4GwEZJZOR4ZK'
  }

  // set cookie for activeRegionId
  docCookies.setItem('activeRegionId', 'cn-beijing')
})


test.only('Ignore unrecognized request', () => {
  const nextConfig = consoleRequestInterceptor(config)
  expect(nextConfig).toBe(config)
})


test('Enhance the config as expected',  () => {
  const nextConfig = consoleRequestInterceptor(correctApi)
  const { data: nextData } = nextConfig
  expect(nextConfig.method).toBe('post')
  expect(nextConfig.url).toBe(`/data/api.json?action=${correctApi.data.action}`)
  expect(nextData.sec_token).toBe('FMAnoDl2xZ4GwEZJZOR4ZK')
  expect(nextData.umid).toBe('Ye1d3501eb576724dbe3381dc4147f9f0')
  expect(nextData.collina).toBeLessThan(Date.now())
  expect(nextData.region).toBe(correctApi.data.params.RegionId)
  expect(nextData.params).toBe(JSON.stringify(correctApi.data.params))
})

test('Ignore the passed in method', () => {
  const nextConfig = consoleRequestInterceptor(incorrectApi)
  expect(nextConfig.method).toBe('post')
})

test('Ehance multi api config as expected', () => {
  const nextConfig = consoleRequestInterceptor(correctMultiApi)
  const { data: nextData } = nextConfig
  expect(nextConfig.method).toBe('post')
  expect(nextConfig.url).toBe('/data/multiApi.json')
  expect(nextData.sec_token).toBe('FMAnoDl2xZ4GwEZJZOR4ZK')
  expect(nextData.umid).toBe('Ye1d3501eb576724dbe3381dc4147f9f0')
  expect(nextData.collina).toBeLessThan(Date.now())
  expect(nextData.region).toBe('cn-beijing')
  expect(nextData.actions).toBe(JSON.stringify(correctMultiApi.data.actions))
})


test('url and data not match', () => {
  // const nextConfig = consoleRequestInterceptor(edgeCase1)
  // const { data: nextData } = nextConfig
  // expect(nextConfig.method).toBe('post')
  // expect(nextData.url).toBe(edgeCase1.url)
  expect(
    () => consoleRequestInterceptor(edgeCase1)
  ).toThrowError(
    'You must specify which api you want to call'
  )

  expect(
    () => consoleRequestInterceptor(edgeCase2)
  ).toThrowError(
    'Actions must be an array'
  )
})



// Check data
test('Should throw when no product is provided', () => {
  expect(
    () => consoleRequestInterceptor(apiWithoutProduct)
  ).toThrowError(
    'You must specify which product\'s api you want to call'
  )
  expect(
    () => consoleRequestInterceptor(multiApiWithoutProduct)
  ).toThrowError(
    'You must specify which product\'s api you want to call'
  )
})
test('Should throw when no action is provided', () => {
  expect(
    () => consoleRequestInterceptor(apiWithoutAction)
  ).toThrowError(
    'You must specify which api you want to call'
  )
})
test('Should throw when action is incorrect', () => {
  expect(
    () => consoleRequestInterceptor(multiApiWrongAction)
  ).toThrowError(
    'Actions must be an array'
  )
})
test('Should throw when action is missing in one of the actions', () => {
  expect(
    () => consoleRequestInterceptor(multiApiWithoutActionInActions)
  ).toThrowError(
    `You must specify which api you want to call.
        If you see this log, it's likely that you've forgot to specify an action
        property in your actions argument. Go for a double check.`
  )
})

