const getGlobalVariable = (varibaleName) => {
  if (typeof varibaleName === 'undefined') {
    throw new Error('VariableName must be provided')
  }
  if (typeof varibaleName !== 'string') {
    throw new TypeError(
      `expect varibaleName to be a string,
      but actually got: ${typeof varibaleName}`
    )
  }
  return window[varibaleName]
}

export default getGlobalVariable
