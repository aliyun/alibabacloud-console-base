import widgetStore from './widgetStore'

const DEFAULT_CONFIG_HOST = 'https://cws.alicdn.com'
const DEFAULT_CONFIG_STANDBY_HOST = 'https://cws2.alicdn.com'

function getConfigHost(useStandby) {
  if (widgetStore.get('configHost')) {
    return widgetStore.get('configHost')
  }
  return useStandby ?
    DEFAULT_CONFIG_STANDBY_HOST :
    DEFAULT_CONFIG_HOST
}

export default getConfigHost
