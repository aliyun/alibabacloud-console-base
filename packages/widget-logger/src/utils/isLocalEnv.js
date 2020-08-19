function isLocalEnv() {
  return (
    window.location.host.indexOf('localhost') >= 0 ||
    window.location.host.indexOf('127.0.0.1') >= 0
  )
}

export default isLocalEnv
