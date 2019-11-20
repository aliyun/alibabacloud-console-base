import ChannelLink from './ChannelLink'
import ChannelFeature from './ChannelFeature'
import configWind from './configWind'
import withContainer from './withContainer'
import createRoot from './createRoot'

function configWindStylePrefix(WrappedComponent) {
  // eslint-disable-next-line no-console
  console.warn(
    '"configWindStylePrefix" is deprecated, use "configWind" instead.'
  )
  return configWind(WrappedComponent)
}

export {
  ChannelLink,
  ChannelFeature,
  configWindStylePrefix,
  configWind,
  withContainer,
  createRoot
}