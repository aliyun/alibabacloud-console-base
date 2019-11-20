import searchParamsInterceptor from '../src/index.js'
import URLSearchParams from 'url-search-params'

test('Expect the properly exports', () => {
  expect(searchParamsInterceptor).toBeDefined()
})

test('Transform data right', () => {
  const config = {
    params: {
      time: '01:00',
      late: true
    },
    data: {
      name: 'tom',
      age: 26,
      gf: 'lucy',
      id: undefined,
      house: null
    }
  }

  const next = searchParamsInterceptor(config)

  // params
  expect(next.params).toBeInstanceOf(URLSearchParams)
  expect(next.params.get('time')).toBe(config.params.time)
  expect(next.params.get('late')).toBe(config.params.late.toString())

  // data
  expect(next.data).toBeInstanceOf(URLSearchParams)
  expect(next.data.get('name')).toBe(config.data.name)
  expect(next.data.get('age')).toBe(config.data.age.toString())
  expect(next.data.get('house')).toBe(JSON.stringify(config.data.house))
  expect(next.data.has('id')).toBeFalsy()
})