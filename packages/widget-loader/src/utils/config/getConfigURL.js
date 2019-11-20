import getConfigHost from '../getConfigHost'

function getConfigURL(widgetId, recover) {
  if (!widgetId) {
    throw new Error('widgetId is required, but missing.')
  }

  return `${getConfigHost(recover)}/Release/pkgs/${widgetId}/config.json`  
}

export default getConfigURL
