import getConsoleConfig from './getConsoleConfig'

export const CHANNEL_FEATURES = 'CHANNEL_FEATURE_STATUS'

const getChannelFeatureList = () => getConsoleConfig(CHANNEL_FEATURES) || {}

export default getChannelFeatureList
