import getConsoleConfig from './getConsoleConfig'

export const REGIONS = 'REGIONS'

let cache = null
const getRegionName = (regionId) => {
  if (cache === null) {
    const regions = getConsoleConfig(REGIONS) || []
    cache = regions.reduce((prev, next) => {
      prev[next.regionId] = next.name
      return prev
    }, {})
  }
  return cache[regionId]
}

export default getRegionName
