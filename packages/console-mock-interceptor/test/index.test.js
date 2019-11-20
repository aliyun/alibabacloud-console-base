import consoleMockInterceptor from '../src/index'

beforeAll(() => {
  global.location.hostname = 'localhost'
})

test('Transformation done right', () => {
  const config = {
    url: '/data/api.json'
  }
  const nextConfig = consoleMockInterceptor()(config)
  expect(nextConfig.url).toBe('data/api.json')
  expect(nextConfig.baseURL).toBe(
    'https://mocks.alibaba-inc.com/mock/oneconsole'
  )
})

test('Change the product name properly', () => {
  const config = {
    data: {
      product: 'vpc',
      action: 'DescribeVpcs',
      params: { RegionId: 'cn-hangzhou' }
    }
  }

  const alias = { vpc: 'vpc_next' }
  const nextConfig = consoleMockInterceptor(alias)(config)
  expect(nextConfig.data.product).toBe(alias[config.data.product])
})

test('Change the product name properly for multi-api call', () => {
  const config = {
    data: {
      product: 'ram',
      actions: []
    }
  }

  const alias = { ram: 'ram_next' }
  const nextConfig = consoleMockInterceptor(alias)(config)
  expect(nextConfig.data.product).toBe(alias[config.data.product])
})
