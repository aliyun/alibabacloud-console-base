import { lazy as lazyLoad } from 'react'
import { getUniversalUtils, getBasicUtils } from '@alicloud/widget-utils-console'
import load from './utils/load'
import parseOption from './utils/parseOption'
import parseId from './utils/parseId'
import getHost from './utils/getHost'
import { getVersion, get404FallbackVersion } from './utils/getVersion'
import getFilename from './utils/getFilename'
import getFecsSecToken from './utils/console/getFecsSecToken'
import getFecsUmid from './utils/console/getFecsUmid'
import checkConsoleUtils from './utils/console/checkConsoleUtils'
import withConsoleConfig from './rc/withConsoleConfig' // deprecated
import withSuspense from './rc/withSuspense'
import withEventEmitter from './rc/withEventEmitter'
import withErrorBoundary from './rc/withErrorBoundary'
import preload from './preload'
import { DEFAULT_RUNTIME_DEPENDENCIES } from './cons'
import generate404Error  from './utils/errorGenerator/generate404Error'
import generateErrorMessage from './utils/errorGenerator/generateErrorMessage'
import { getOrigin } from '@alicloud/widget-logger'
import WidgetLoaderLogger from './utils/logger/loader'
import WidgetErrorLogger from './utils/logger/error'
import needDynamiclyLoadRuntime from './utils/runtime/needDynamiclyLoadRuntime'
import loadRuntime from './utils/runtime/loadRuntime'
import withSandbox from './rc/withSandbox'
import widgetStore from './utils/widgetStore'
import createDynamicWindStylePrefix from './utils/runtime/createDynamicWindStylePrefix'


function createLoader(opts = {}) {
  const {
    dependencies = {},

    // TODO: remove `windRuntime` at some point, instead use a more general
    // parameter to handle these runtime loaded dependencies.

    // React related params
    reactRuntime: reactRuntimeOptions = {},

    // All wind related params should be collect into this object.
    windRuntime: windRuntimeOptions = {},

    // Deprecation!
    // TODO: this will be removed in the next major release.
    consoleConfig = {},

    // React Suspense api for widget.
    suspense: loaderSuspense = {},

    // Lazy load widget by default.
    lazy: loaderLazy = true,

    // `initiator` is used to identify where the loader is initialized.
    initiator = `${getOrigin()}${location.pathname}`,

    host: passedInHost,

    configHost: passedInConfigHost,

    // A debug flag used to turn on and off debug mode
    debug = false
  } = opts


  // !Deprecation
  if (opts.consoleConfig) {
    // eslint-disable-next-line no-console
    console.error(generateErrorMessage(
      `
      Parameter "consoleConfig" is deprecated, it will be removed from the
      package at the next major release of @alicloud/widget-loader.
      The console utils that were used to pass to "consoleConfig" parameter
      are now expected to pass to "dependencies['@alicloud/widget-utils-console']".

      <<<<<<<<<<<< Deprecated Usage <<<<<<<<<<<<
        const loadWidget = createLoader({
          consoleConfig: {
            getLocale: () => 'LOCALE'
          }
        })
      >>>>>>>>>>>> Recommended Usage >>>>>>>>>>>>
        const loadWidget = createLoader({
          dependencies: {
            '@alicloud/widget-utils-console': {
              getLocale: () => 'LOCALE'
            }
          }
        })

      The deprecated "consoleConfig" api is still going to work at current
      major, so that you have time to upgrade.`
    ))
  }

  // Hosts are used to retrive release data, widget itself and its config data.
  // If developers want to use custom hosts, then set the passed in hosts for them.
  // Since the places where hosts are used are nesting very deeply, for implementation simplicity,
  // we just store these informations into widget store.
  // And data stored in __ALIYUN_WIDGET_STORE__ are shared by all the loaders.
  // In this case, share hosts throuth all widget loaders is Okay,
  // different hosts for one app should not be allowed.
  if (
    typeof passedInHost === 'string' &&
    !widgetStore.get('host')
  ) {
    widgetStore.set('host', passedInHost)
  }
  if (
    typeof passedInConfigHost === 'string' &&
    !widgetStore.get('configHost')
  ) {
    widgetStore.set('configHost', passedInConfigHost)
  }

  // Merge console utils
  // We know well about where to get those console configs when we are in an
  // one-console app by using `@alicloud/widget-utils-console`, but have no idea
  // in other apps, and their might differ a lot.
  // So the strategy here is we use `@alicloud/widget-console-utils` when we detect
  // that we are in one-console, and let the user to tell us what to do
  // the otherwise.
  const basicConsoleUtils = getBasicUtils()
  const universalConsoleUtils = getUniversalUtils()
  let consoleUtils = {
    ...(
      universalConsoleUtils.isOneConsole()
        ? {
          ...basicConsoleUtils,
          ...universalConsoleUtils,
          getBasicUtils, // FIXME: This method should be get rid of in 4.0, for there is no inner loader
          getUniversalUtils // FIXME: This method should be get rid of in 4.0, for there is no inner loader
        }
        : {
          ...universalConsoleUtils,
          // If we are not in OneConsole, then we set `useCORS` to always return `true` explicitly
          useCORS: () => true,
          getBasicUtils, // FIXME: This method should be get rid of in 4.0, for there is no inner loader
          getUniversalUtils // FIXME: This method should be get rid of in 4.0, for there is no inner loader
        }
    ),
    ...consoleConfig, // FIXME: Compat for old api, this will be removed at next major
    ...(
      dependencies['@alicloud/widget-utils-console']
        ? dependencies['@alicloud/widget-utils-console']
        : {}
    )
  }

  // Check whether need to use fecs CORS
  // If `true` is the case, then rewrite below two utils
  if (consoleUtils.useCORS()) {
    consoleUtils.getSecToken = getFecsSecToken
    consoleUtils.getUmid = getFecsUmid
    consoleUtils.getCollina = universalConsoleUtils.getCollina || (() => '')
  }

  // Check the console utils that widgets need.
  consoleUtils = checkConsoleUtils(consoleUtils)

  // Assemble runtime dependencies that widgets need.
  // During the widget's dundling time, below 7 packages are droped from
  // the final bundle:
  // react, react-dom, prop-types, axios, @alicloud/console-components, @alicloud/console-components-intl/lib/Provider
  // , @alicloud/widget-utils-console.
  // These packages are expected to be provided by widget loader at the "eval"
  // phrase. Widget loader will make an assumption that react, react-dom,
  // prop-types are exist no matter how. So it just import these three packages
  // without examination in `DEFAULT_RUNTIME_DEPENDENCIES`.
  // axios is a dependency of widget loader itself, so we can import it without
  // a concern, axios is also get imported in `DEFAULT_RUNTIME_DEPENDENCIES`.
  // Above 4 packages are excluded from the widget final bundle only for the
  // consideration of the bundle size.
  // What been left are @alicloud/console-components, @alicloud/console-components-intl/lib/Provider and
  // @alicloud/widget-utils-console, let's first talk about the former two.
  // @alicloud/console-components and @alicloud/console-components-intl/lib/Provider are loaded by widget loader
  // before the actual widget get loaded, this is because widget need these 2
  // packages to run. In order to reduce the payload size of these 2 packages,
  // we bundled them into a widget called "wind-runtime", developer can control
  // how "wind-runtime" get loaded by pass the same "wind-runtime" parameter
  // at widget loader's initialization.
  // wind-runtime's exclusion is majorly for the size concern, but we also do
  // it for another reason which is to have the chance to alter its source code
  // before execute it and pass it to widgets as dependency. And this is
  // necessary for the co-exist of different instances of wind-runtime, they
  // might have style collision for the same classnames.
  // Last but not the least, @alicloud/widget-utils-console. This package is a
  // collecion of console utilities that are used to retrive information about
  // the web console app. Sadly, web console apps of alibaba cloud have no
  // standard, there are many different types of console portal. By default,
  // @alicloud/widget-utils-console's utilities are bound to "one-console", but
  // widget need to support all kinds of console apps, so
  // developers may pass in their console portal specific utilities to widget
  // loader, it will then ressemble @alicloud/widget-utils-console as required.
  // Meanwhile, widget loader injects 1 wind specific method `getWindMessages`
  // and 3 widget specific methods `getChannelLinkList`, `getChannelFeatureList`
  // , `getWidgetI18nMessages` to @alicloud/widget-utils-console for all widgets.
  // If you want to see the details of the injections, you can global search
  // the project with these methods' names.
  let runtimeDependencies = {
    ...DEFAULT_RUNTIME_DEPENDENCIES, // axios
    ...dependencies, // User specified dependencies
    '@alicloud/widget-utils-console': consoleUtils,
    '@alicloud/widget-loader': { // Inject the loader to the inner widget.
      __esModule: true,
      default: () => loadWidget
    }
  }

  let preloadRuntimeProcess = null
  async function preloadRuntime() {
    const { runtimeVersion: reactRuntimeVersion } = reactRuntimeOptions
    const {
      runtimeVersion: windRuntimeVersion,
      messageVersion: windMessageVersion
    } = windRuntimeOptions

    const { message, stylePrefix, runtime } = await loadRuntime({
      reactRuntimeVersion,
      windRuntimeVersion,
      windMessageVersion,
      locale: consoleUtils.getLocale()
    })

    // Inject some utils to consoleUtils
    consoleUtils.getWindMessages = () => message
    consoleUtils.getStylePrefixForWindComponent = () => stylePrefix

    // Merge with wind-runtime
    runtimeDependencies = {
      ...runtimeDependencies,
      /**
       * react,
       * react-dom,
       * @alicloud/console-components,
       * @alicloud/console-components-intl/lib/Provider, @alicloud/console-components-intl/lib/withRcIntl,
       * @alife/dpl-console-design-201X
       */
      ...runtime
    }
  }

  // Preload runtime(react, wind) if necessary
  if (needDynamiclyLoadRuntime(runtimeDependencies)) {
    preloadRuntimeProcess = preloadRuntime()
  } else {
    // Inject some utils to consoleUtils
    // Only works for script loaded widget
    consoleUtils.getWindMessages = () => {
      const locale = consoleUtils.getLocale()
      const messages = window[`wind-v2_${locale.toLowerCase()}`]
      if (!messages) {
        // eslint-disable-next-line
        console.error('[Widget Loader] No wind-messages was found in the global.')
      }
      return messages
    }
    consoleUtils.getStylePrefixForWindComponent = () => {
      const stylePrefix = createDynamicWindStylePrefix(
        window['WidgetWindRuntime']['version']
      )
      return stylePrefix
    }
  }

  /**
   * @description
   * widgetOptions shape:
   * id: string, // such as '@ali/widget-test'
   * version: string  // such as '1.2.3' or '2.x'
   */
  function loadWidget(
    widgetOptions,
    loadOptions = {}
  ) {
    const options = parseOption(widgetOptions)

    // `lazy` and `suspense` can be customized for every widget loading
    const {
      lazy: widgetLazy = loaderLazy,
      suspense: widgetSuspense = loaderSuspense
    } = loadOptions

    // Initialize a "logger" for every widget loading process
    const widgetLoaderLogger = new WidgetLoaderLogger({
      id: options.id,
      request_ver: options.version,
      initiator
    }, { debug })

    const startToLoadWidget = () => new Promise(async (resolve) => {
      // lazyLoad() accept a promise
      // which resolves to a react component.

      // NOTE HERE!
      // We do not reject the promise for any situation,
      // because that will unmount the whole app,
      // and that is absolutely not what we want.

      // Mark the start time at the beginning of the loading process
      widgetLoaderLogger.start()
      widgetLoaderLogger.location(`${getOrigin()}${window.location.pathname}`)

      // Detect whether need to load `runtime dependencies` or not.
      // If `true` is the case, then the very first widget loading time
      // will be observably slower than the subsequent ones.
      if (
        needDynamiclyLoadRuntime(runtimeDependencies) && // through network
        preloadRuntimeProcess // the process has been started
      ) {
        await preloadRuntimeProcess
      } else if (
        needDynamiclyLoadRuntime(runtimeDependencies) // through network
      ) {
        // The process is not started yet, then do it right now.
        preloadRuntimeProcess = preloadRuntime()
        await preloadRuntimeProcess
      }

      // Get widget host url
      const host = getHost()

      // Get `group` and `name` out of widget id
      const { group, name } = parseId(options.id)

      // Get widget version
      const version = await getVersion(options, consoleUtils.getCurrentUid())
      widgetLoaderLogger.version(version)

      // Get widget filename
      const filename = getFilename()

      const resolvedURL = `${host}/${group}/${name}/${version}/${filename}`

      // Define the wanted module
      let module

      try {
        widgetLoaderLogger.startToLoadWidget()
        module = await load(resolvedURL, runtimeDependencies)
      } catch (error) {
        // we catch the 404 error here, and fallback
        if (typeof error === 'object' && error.code === 404) {
          const fallbackVersion = await get404FallbackVersion(
            options,
            consoleUtils.getCurrentUid()
          )

          widgetLoaderLogger.version(fallbackVersion)

          // eslint-disable-next-line no-console
          console.warn(`[Widget Loader] Can't fetch widget ${
            options.id
          } version ${version}.
          Fallback to version ${fallbackVersion}`)

          const fallbackURL =
            `${host}/${group}/${name}/${fallbackVersion}/${filename}`

          try {
            module = await load(fallbackURL, runtimeDependencies)
          } catch (error) {
            if(error.code === 'eval') {
              const evalErrorLogger = new WidgetErrorLogger({
                id: options.id,
                version,
                e_code: error.code,
                e_msg: error.message,
                e_stack: error.stack
              }, {
                debug
              })
              evalErrorLogger.send()
            } else {
              // Any unrecogonized error would be treat as an 404 error
              widgetLoaderLogger.error(generate404Error(error))
            }
            throw error
          }
        } else {
          if(error.code === 'eval') {
            const evalErrorLogger = new WidgetErrorLogger({
              id: options.id,
              version,
              e_code: error.code,
              e_msg: error.message,
              e_stack: error.stack
            }, {
              debug
            })
            evalErrorLogger.send()
          } else {
            // Any unrecogonized error would be treat as an 404 error
            widgetLoaderLogger.error(generate404Error(error))
          }
          throw error
        }
      } finally {
        widgetLoaderLogger.endLoadingWidget()
      }

      widgetLoaderLogger.end()

      const widgetWithConsoleConfig = withConsoleConfig({
        // Compat with old dependent libraries.
        locale: consoleUtils.getLocale(),
        channelId: consoleUtils.getChannel(),
        windMessages: consoleUtils.getWindMessages()
      })(module)

      // The real widget gets rendered in a "Sandbox" component
      const widgetWithSandbox = withSandbox(runtimeDependencies['react-dom'])(
        widgetWithConsoleConfig
      )

      // The callback passing to React.lazy should return a promise,
      // which resolves to a module with a default property.
      resolve({ default: widgetWithSandbox })
    })

    // If 'widgetLazy' is set to `true`, then the loading process will be
    // delayed to widget's first render.
    // Otherwise, widget will get loaded immediately.
    const Widget = widgetLazy
      ? withSuspense(widgetSuspense)(lazyLoad(startToLoadWidget))
      : preload(startToLoadWidget())

    const widgetWithEventEmitter = withEventEmitter(Widget)
    
    const widgetWithErrorBoundary = withErrorBoundary({
      id: options.id,
      version: options.version,
      debug
    })(
      widgetWithEventEmitter
    )

    return widgetWithErrorBoundary
  }

  // Return the widget loading function
  return loadWidget
}

export default createLoader
