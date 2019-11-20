import upperFirst from './upperFirst'
import camelCase from './camelCase'
import { DEFAULT_RUNTIME_DEPENDENCIES, PACKAGE_VERSION } from '../cons'
import request from './request'
import parseUrl from './parseUrl'
import loadWidgetConfig from './config'
import generateErrorMessage from './errorGenerator/generateErrorMessage'
import generateEvalError from './errorGenerator/generateEvalError'
import generate404Error from './errorGenerator/generate404Error'
import widgetCache from './widgetCache'


const SUB_MODULE_REGEXP = {
  wind: /^(@ali\/wind)\/lib\/(.+)$/,
  widgetConsoleUtils: /^(@ali\/widget-utils-console)\/lib\/(.+)$/
}

function getUMDName(widgetId) {
  const [, name] = widgetId.split('/')
  const name1 = name.replace(/-(.)/g, (match, target) => {
    return target.toUpperCase()
  })
  const name2 = name1.replace(/^./, (match) => {
    return match.toUpperCase()
  })
  return name2
}

// Define the widget load function
async function load(url, passedInDependencies = DEFAULT_RUNTIME_DEPENDENCIES) {
  // Parse the url to get detail informations
  const info = parseUrl(url)

  // We use id & version as the cache key
  if (widgetCache.get(`${info.id}:${info.version}`)) {
    return widgetCache.get(`${info.id}:${info.version}`)
  }

  /**
   * Temperary implementaion
   * 
   * TODO: refactor it later
   */
  const widgetUMDName = getUMDName(info.id)
  if (window[widgetUMDName]) {
    const preLoadedModule = window[widgetUMDName]['default']
    widgetCache.set(`${info.id}:${info.version}`, preLoadedModule)
    return preLoadedModule
  }

  // We need to provide all the dependencies
  // that the module dependent
  // We will mimic a CommonJS env here
  const module = {
    exports: {}
  }

  const dependencies = { ...passedInDependencies }

  // Every widget should get its own `@alicloud/widget-utils-console`
  // We shallow copy it for every widget.
  const consoleUtils = dependencies['@alicloud/widget-utils-console'] &&
    { ...dependencies['@alicloud/widget-utils-console'] }

  // Assign back to `dependencies`
  dependencies['@alicloud/widget-utils-console'] = consoleUtils

  // Inject `@alicloud/widget-utils-config`
  const configUtils = {}
  dependencies['@alicloud/widget-utils-config'] = configUtils

  // The source code need a require function to resolve to
  // its dependencies.
  function require(moduleName) {
    const windMatch = moduleName.match(SUB_MODULE_REGEXP.wind)
    if (windMatch !== null) {
      const module = windMatch[1] // @alicloud/console-components
      const component = windMatch[2] // button or ...
      return dependencies[module][upperFirst(camelCase(component))]
    }
    const widgetConsoleUtilsMatch = moduleName.match(
      SUB_MODULE_REGEXP.widgetConsoleUtils
    )
    if (widgetConsoleUtilsMatch !== null) {
      const module = widgetConsoleUtilsMatch[1] // @alicloud/widget-utils-console
      const utilily = widgetConsoleUtilsMatch[2] // getLocale or ...
      return dependencies[module][utilily]
    }
    return dependencies[moduleName]
  }

  // Get the widget source code and its config
  let sourceCode, widgetConfig
  try {
    const [ code, config ] = await Promise.all([
      request.get(url),
      loadWidgetConfig({
        widgetId: info.id,
        locale: consoleUtils.getLocale(),
        channelId: consoleUtils.getChannel()
      })
    ])
    sourceCode = code.data
    widgetConfig = config
  } catch (error) {
    // If we know the error, then throw it directly.
    if (error.code) { 
      throw error
    }
    // Otherwise, it should be a network error, and
    // we are not able to read any useful info from response
    // because this is a cross origin request,
    // and our CDN server don't return CORS header when status >= 400
    // so we have to treat any network error as 404, and try to fallback
    throw generate404Error(error)
  }

  // Inject some utils back to `@alicloud/widget-utils-console`
  if (consoleUtils) {
    consoleUtils.getWidgetI18nMessages = () => widgetConfig.messages
    consoleUtils.getChannelLinkList = () => widgetConfig.links
    consoleUtils.getChannelLink = consoleUtils.channelLinkFactory(
      consoleUtils.getChannelLinkList
    )
    consoleUtils.getChannelFeatureList = () => widgetConfig.features
    consoleUtils.getChannelFeature = consoleUtils.channelFeatureFactory(
      consoleUtils.getChannelFeatureList
    )
    consoleUtils.getWidgetInfo = () => ({ ...info, loader: PACKAGE_VERSION })

    // Inject the utils to `@alicloud/widget-utils-config
    configUtils.getWidgetI18nMessages = () => widgetConfig.messages
    configUtils.getChannelLinkList = () => widgetConfig.links
    configUtils.getChannelLink = consoleUtils.channelLinkFactory(
      configUtils.getChannelLinkList
    )
    configUtils.getChannelFeatureList = () => widgetConfig.features
    configUtils.getChannelFeature = consoleUtils.channelFeatureFactory(
      configUtils.getChannelFeatureList
    )
  }


  // Construct a function to evaluate the loaded script
  try {
    Function(`
    return function(module, exports, require) {
      ${sourceCode}
    };
  `)()(module, module.exports, require)
  } catch (err) {
    /* eslint-disable no-console */
    console.error(`[Widget Loader]运行 ${info.id} 出错：`, info)
    console.error(
      `[Widget Loader]请联系 widget 开发者 👉：http://cws.aliyun-inc.com/widget/widget/${
        info.name
      }`
    )
    throw generateEvalError(err)
    /* eslint-enable no-console */
  }

  // Return the final module
  if (!module || !module.exports || !module.exports.default) {
    const err = new Error(
      generateErrorMessage(
        `Widget: ${info.id} was successfully loaded and executed,
        but it has an unexpected module export. This happens when the widget was
        not rightly bundled.`
      )
    )
    throw generateEvalError(err)
  }

  // Put the result into cache
  widgetCache.set(`${info.id}:${info.version}`, module.exports.default)

  return module.exports.default
}

export default load
