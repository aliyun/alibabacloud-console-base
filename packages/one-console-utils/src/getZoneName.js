import getConsoleConfig from './getConsoleConfig'
import { REGIONS } from './getRegionName'

let cache = null
const getZoneName = (zoneId) => {
  if (cache === null) {
    cache = {}
    const regions = getConsoleConfig(REGIONS) || []
    regions.forEach((region) => {
      const { zoneList } = region
      zoneList.reduce((prev, next) => {
        prev[next.zoneId] = next.name
        return prev
      }, cache)
    })
  }
  return cache[zoneId]
}

export default getZoneName
