import getOpenStatusList from './getOpenStatusList'

const getOpenStatus = (productId) => {
  const openStatusList = getOpenStatusList()
  if (typeof productId === 'undefined') {
    throw new Error(
      '"productId" must be provided, but missing from getOpenStatus(productId)'
    )
  }
  if (typeof openStatusList[productId] === 'undefined') {
    throw new ReferenceError(
      `You might have forgot to config "${productId}" in your OEPN_STATUS`
    )
  }
  return openStatusList[productId]
}

export default getOpenStatus
