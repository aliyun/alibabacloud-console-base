import widgetStore from './widgetStore'

const DEFAULT_WIDGET_CDN_HOST = 'https://g.alicdn.com'

function getHost() {
  return widgetStore.get('host') || DEFAULT_WIDGET_CDN_HOST
}

export default getHost
