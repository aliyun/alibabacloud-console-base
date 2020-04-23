import getChannelFeatureList from './getChannelFeatureList'

const getChannelFeature = (id) => {
  const feature_list = getChannelFeatureList()
  if (typeof id === 'undefined') {
    throw new ReferenceError('Feature id is required, but missing.')
  }
  if (typeof feature_list[id] === 'undefined') {
    throw new ReferenceError(
      `You might have forgot to setup feature: "${id}" in Viper(https://vipernew.aliyun-inc.com/)`
    )
  }
  return feature_list[id]
}

export default getChannelFeature
