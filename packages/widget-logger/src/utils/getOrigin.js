// A fix for window.location.origin in Internet Explorer
function getOrigin() {
  if (window.location.origin) {
    return window.location.origin
  }
  return `${window.location.protocol}//${window.location.hostname}${window.location.port ? ':' + window.location.port : ''}`
}

export default getOrigin
