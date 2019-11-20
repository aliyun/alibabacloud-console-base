export default function channelFeatureFactory(getChannelFeatureList) {
  return function getChannelFeature(id, activeRegionId, determinator) {
    if (typeof id !== 'string') {
      throw new TypeError(
        `[getChannelFeature] Invalid type for "id" parameter, expect a string, but got ${typeof id}.`
      )
    }
  
    const features = getChannelFeatureList() || []
    const feature = features[id]
  
    if (!feature) {
      throw new TypeError(
        `[getChannelFeature] Can not find the feature data for id: ${id}.`
      )
    }
  
    // Leave the decision to the user
    if (determinator) {
      return determinator(feature)
    }
  
    const { status, regions } = feature
  
    if (activeRegionId && regions) {
      return status && regions.includes(activeRegionId)
    }
  
    return status
  }
}
