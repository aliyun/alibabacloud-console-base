import load from './load'
import loadWindMessage from './loadWindMessage'
import { getVersion } from '../getVersion'
import getHost from '../getHost'
import widgetCache from '../widgetCache'
import createWindRuntimeSourceLoader from './createWindRuntimeSourceLoader'
import createDynamicWindStylePrefix from './createDynamicWindStylePrefix'
import { DEFAULT_STYLE_PREFIX_FOR_WIND_COMPONENT } from '../../cons'

async function loadRuntime({
  locale,
  reactRuntimeVersion: passedInReactRuntimeVersion,
  windRuntimeVersion: passedInWindRuntimeVersion,
  windMessageVersion: passedInWindMessageVersion
}) {
  const reactRuntimeId = '@ali/widget-react-runtime'
  const windRuntimeId = '@ali/widget-wind-runtime'
  const windMessageId = '@alicloud/console-components-messages'

  let reactRuntimeVersion = passedInReactRuntimeVersion
  let windRuntimeVersion = passedInWindRuntimeVersion
  let windMessageVersion = passedInWindMessageVersion

  
  if (!reactRuntimeVersion) {
    // Get the base version of react-runtime from release.json
    const baseReactRuntimeVersion = await getVersion({ id: reactRuntimeId })
    reactRuntimeVersion = baseReactRuntimeVersion
  }

  // Get the base version of wind-runtime from release.json
  const baseWindRuntimeVersion = await getVersion({ id: windRuntimeId })
  if (!windRuntimeVersion) {
    windRuntimeVersion = baseWindRuntimeVersion
  }
  // User specified `runtimeVersion` will not take effect if the
  // `window.__ALIYUN_WIDGET_USE_DIFFERENT_WIND_RUNTIME__` global variable is
  //  not explicitly set to true.
  if (window.__ALIYUN_WIDGET_USE_DIFFERENT_WIND_RUNTIME__ !== true) {
    windRuntimeVersion = baseWindRuntimeVersion
  }

  if (!windMessageVersion) {
    // Get the base version of wind-message from release.json
    const baseWindMessageVersion = await getVersion({ id: windMessageId })
    windMessageVersion = baseWindMessageVersion
  }

  // Assemble urls
  const host = getHost()
  const urls = {
    reactRuntime: `${host}/widget/react-runtime/${reactRuntimeVersion}/index.js`,
    windRuntime: `${host}/widget/wind-runtime/${windRuntimeVersion}/index.js`,
    windMessage: `${host}/one-mcms/wind-v2/${windMessageVersion}/wind-v2_${locale.toLowerCase()}.json`
  }

  // Init a wind-runtime source loader
  const useDifferentWindRuntime = windRuntimeVersion !== baseWindRuntimeVersion
  const stylePrefix = useDifferentWindRuntime ?
    createDynamicWindStylePrefix(windRuntimeVersion) :
    DEFAULT_STYLE_PREFIX_FOR_WIND_COMPONENT
  const windRuntimeSourceLoader = useDifferentWindRuntime ?
    createWindRuntimeSourceLoader(stylePrefix) :
    undefined


  // Cache runtime dependencies for widgets
  const runtimeCacheKey = `runtime_${reactRuntimeVersion}_${windRuntimeVersion}`
  if (!widgetCache.get(runtimeCacheKey)) {
    widgetCache.set(
      runtimeCacheKey,
      load(
        [urls.reactRuntime, urls.windRuntime],
        windRuntimeSourceLoader
      )
    )
  }
  // Cache wind-message, which are used by wind UI components for i18n.
  const windMessageCacheKey = `wind_message_${windMessageVersion}`
  if (!widgetCache.get(windMessageCacheKey)) {
    widgetCache.set(windMessageCacheKey, loadWindMessage(urls.windMessage))
  }

  const [runtime, message] = await Promise.all([
    widgetCache.get(runtimeCacheKey),
    widgetCache.get(windMessageCacheKey)
  ])

  return {
    runtime,
    message,
    stylePrefix
  }
}

export default loadRuntime
