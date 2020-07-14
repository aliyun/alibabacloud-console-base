const compose = (...funcList) => {
  if (funcList.length === 0) {
    return (arg) => arg
  }

  if (funcList.length === 1) {
    return funcList[0]
  }

  return funcList.reduce((a, b) => (...args) => a(b(...args)))
}

export default compose
