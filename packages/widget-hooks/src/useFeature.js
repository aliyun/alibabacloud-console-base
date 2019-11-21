import useConsoleConfig from './useConsoleConfig'

function useFeature(id, activeRegionId, determinator) {
  console && console.warn( // eslint-disable-line
    `[useFeature] This hook is deprecated, please use the corresponding static method "getChannelFeature" instead: 
    "import { getChannelFeature } from '@alicloud/widget-utils-console'"
    `
  )
  if (typeof id !== 'string') {
    throw new TypeError(
      `[useFeature] Invalid type for "id" parameter, expect a string, but got ${typeof id}.`
    )
  }

  const features = useConsoleConfig('features')
  // If the config data is not loaded yet, then we can not decide whether to 
  // show the "feature" or not. In this case, return `false` seems to be a more
  // safer way.
  if (features === null) {
    return false
  }

  const feature = features[id]
  if (!feature) {
    throw new TypeError(
      `[useFeature] Can not find the feature data for id: ${id}.`
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

export default useFeature
