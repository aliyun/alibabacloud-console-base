import request, { axios } from '../src'

test('Should have axios exported', () => {
  expect(axios).toBeDefined
})

test('Axios should have the right interface', () => {
  expect(axios.create).toBeInstanceOf(Function)
})

test('Should have the instance exported', () => {
  expect(request).toBeDefined
})
