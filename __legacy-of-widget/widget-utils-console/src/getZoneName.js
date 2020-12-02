import { getZoneName } from '@alicloud/one-console-utils'

export default (id) => {
  return getZoneName(id) || id
}
