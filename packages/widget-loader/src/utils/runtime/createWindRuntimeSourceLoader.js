import { DEFAULT_STYLE_PREFIX_FOR_WIND_COMPONENT } from '../../cons'

function createWindRuntimeSourceLoader(prefix) {
  return function windRuntimeSourceLoader(source) {
    const pattern = new RegExp(DEFAULT_STYLE_PREFIX_FOR_WIND_COMPONENT, 'g')
    return prefix && source
      ? source.replace(pattern, prefix)
      : source
  }
}

export default createWindRuntimeSourceLoader
