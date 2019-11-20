import set from 'lodash/set'
import get from 'lodash/get'

const defaultOptions = {
  namespace: '@wind_v2.base',
}

export default function extractWindComponentMessages(
  rawMessages,
  options = defaultOptions,
) {
  const result = {}
  const { namespace } = options
  const prefix = `${namespace}.`

  for (const key in rawMessages) {
    if (
      Object.prototype.hasOwnProperty.call(rawMessages, key) &&
      key.indexOf(prefix) === 0
    ) {
      set(result, key, rawMessages[key])
    }
  }

  return get(result, namespace)
}
