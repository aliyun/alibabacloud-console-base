import { getRegionName } from '@alicloud/one-console-utils'

export default (id) => {
  return getRegionName(id) || id
}
