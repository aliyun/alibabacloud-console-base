import { lazy } from 'react'
import { createContext } from '@alicloud/browsing-context'
import Logger from '@alicloud/widget-logger'
import { mergeWithDefaultConfig, mergeConfig } from './defaultConfig'
import HookManager from './hookManager'
import loadScript from './utils/loadScript'
import getFactory from './utils/getFactory'
import executeScript from './utils/executeScript'
import executeUmd from './utils/executeUmd'
import generateError from './utils/generateError'
import compose from './hoc/compose'
import withErrorBoundary from './hoc/withErrorBoundary'
import withLocalRender from './hoc/withLocalRender'
import withContainer from './hoc/withContainer'
import withSuspense from './hoc/withSuspense'

class Loader {
  constructor(config) {
    // browsing context
    this.browsingContext =
      config.browsingContext &&
      createContext({
        rootClassName: config.namespace,
        ...config.browsingContext,
      })

    // define hooks that custom logics can plug in
    this.hooks = {
      beforeRequest: new HookManager(),
      beforeExecute: new HookManager(),
      beforeResolve: new HookManager(),
    }

    // loggers
    this.loggers = {
      loader: new Logger(config.logEndpoints && config.logEndpoints.loader),
      error: new Logger(config.logEndpoints && config.logEndpoints.error),
    }

    // _baseConfig may change over time
    // because of the prepare works
    this._baseConfig = mergeWithDefaultConfig(config)

    // the initial prepare work in an already resolved promise
    this._prepareWork = Promise.resolve()
  }

  prepare(work, errorHandler) {
    // prepare works should be done in sequence
    // we wrap the on going work into the next work, which
    // will not be initiated until the current on going work is done.
    const currentWork = this._prepareWork

    // compose the current work and the next work
    this._prepareWork = (async () => {
      await currentWork

      try {
        // start a race in case of the work taking forever
        const nextBaseConfig = await Promise.race([
          work({ ...this._baseConfig }),
          new Promise((x, reject) => {
            setTimeout(() => {
              reject(new Error('Execute the prepare work timeout.'))
            }, this._baseConfig.prepareTimeout)
          }),
        ])

        // all prepare work should choose to return a new config object
        // or just return an "undefined" to indicate no more configurations
        // in that particular prepare work.
        this._baseConfig = nextBaseConfig || this._baseConfig
      } catch (err) {
        if (typeof errorHandler === 'function') {
          const nextBaseConfig = await errorHandler(err, {
            ...this._baseConfig,
          })
          this._baseConfig = nextBaseConfig || this._baseConfig
        } else {
          // log to sls
          this.loggers.error.send({
            e_phrase: 'prepare',
            e_msg: err.message,
            e_stack: err.stack,
          })

          throw generateError('prepare', err)
        }
      }
    })()
  }

  clearPrepareWork() {
    // reset to a newly resolved promise
    this._prepareWork = Promise.resolve()
  }

  executeScript({ code, name }) {
    try {
      executeScript({
        code,
        name,
        browsingContext: this.browsingContext,
      })
    } catch (err) {
      // log to sls
      this.loggers.error.send({
        e_phrase: 'execute_script',
        e_msg: err.message,
        e_stack: err.stack,
      })

      throw generateError('execute_script', err)
    }
  }

  executeUmd({ code, dependencies, name }) {
    try {
      return executeUmd({
        code,
        dependencies,
        name,
        browsingContext: this.browsingContext,
      })
    } catch (err) {
      // log to sls
      this.loggers.error.send({
        e_phrase: 'execute_umd',
        e_msg: err.message,
        e_stack: err.stack,
      })

      throw generateError('execute_umd', err)
    }
  }

  async loadScript(url) {
    return loadScript(url)
  }

  getModule(widgetInfo, dependencies = {}) {
    if (!widgetInfo) {
      return null
    }

    const { widgetJsonpIdentifier } = this._baseConfig

    const module = {
      exports: {},
    }
    const require = (moduleIdentifier) => dependencies[moduleIdentifier]

    const widgetFactory = getFactory(
      window[widgetJsonpIdentifier],
      widgetInfo.id,
      widgetInfo.version
    )

    widgetFactory(module, module.exports, require, {
      window: this.browsingContext ? this.browsingContext.window : window,
      self: this.browsingContext ? this.browsingContext.window : window,
      document: this.browsingContext ? this.browsingContext.document : document,
      location: this.browsingContext ? this.browsingContext.location : location,
      history: this.browsingContext ? this.browsingContext.history : history,
    })

    return module
  }

  async request(config) {
    this.loggers.loader.timeStart('t_request')

    const { url, requestCompanion } = config
    const [, ...responseCompanion] = await Promise.all([
      loadScript(url), // load the widget itself
      ...requestCompanion, // load the request companion
    ])

    this.loggers.loader.timeEnd('t_request')

    return mergeConfig(config, { responseCompanion })
  }

  async execute(config) {
    this.loggers.loader.timeStart('t_execute')

    const { widgetInfo, dependencies } = config
    const module = this.getModule(widgetInfo, dependencies)

    this.loggers.loader.timeEnd('t_execute')

    return mergeConfig(config, { resolveTarget: module })
  }

  async resolve(config) {
    this.loggers.loader.timeStart('t_resolve')

    const { resolveTarget, dependencies, hoc } = config
    const {
      errorBoundary: errorBoundaryOptions,
      localRender: localRenderOptions,
      container: containerOptions,
    } = hoc

    // wrap with hocs
    const enhance = compose(
      withErrorBoundary(errorBoundaryOptions, config.namespace),
      withLocalRender(localRenderOptions, dependencies['react-dom']),
      withContainer(
        containerOptions === false
          ? containerOptions
          : {
              className: config.namespace,
              ...containerOptions,
            }
      )
    )

    const target = enhance(resolveTarget.default)

    this.loggers.loader.timeEnd('t_resolve')

    return mergeConfig(
      config,
      // React.lazy expect the shape
      // an object with a default export
      {
        resolveTarget: {
          default: target,
        },
      }
    )
  }

  load(config) {
    const startToLoad = () =>
      new Promise(async (resolve) => {
        this.loggers.loader.timeStart('t_total')

        this.loggers.loader.timeStart('t_wait')
        await this._prepareWork // wait for the prepare work
        this.loggers.loader.timeEnd('t_wait')

        const chain = []

        // put all before request hooks into the chain
        this.hooks.beforeRequest.handlers.forEach((h) => {
          chain.push(h.fulfilled, h.rejected)
        })

        // then the request itself
        chain.push(this.request.bind(this), undefined)

        // put all before execute hooks into the chain
        this.hooks.beforeExecute.handlers.forEach((h) => {
          chain.push(h.fulfilled, h.rejected)
        })

        // then the execute itself
        chain.push(this.execute.bind(this), undefined)

        // put all before resolve hooks into the chain
        this.hooks.beforeResolve.handlers.forEach((h) => {
          chain.push(h.fulfilled, h.rejected)
        })

        // then the resolve itself
        chain.push(this.resolve.bind(this), undefined)

        const currentLoadConfig = mergeConfig(this._baseConfig, config)

        // flush the chain, feeding the very first beforeRequest hook
        // with the `currentLoadConfig`
        let promise = Promise.resolve(currentLoadConfig)
        while (chain.length > 0) {
          promise = promise.then(chain.shift(), chain.shift())
        }

        let module
        try {
          const { resolveTarget } = await promise
          module = resolveTarget
        } catch (err) {
          // log to sls
          this.loggers.error.send({
            e_phrase: 'load',
            e_msg: err.message,
            e_stack: err.stack,
          })

          throw generateError('load', err)
        }

        this.loggers.loader.timeEnd('t_total')
        this.loggers.loader.send()

        resolve(module)
      })

    // merge load config with baseConfig
    const loadConfig = mergeConfig(this._baseConfig, config)
    const { lazy: lazyToLoad } = loadConfig

    let widget
    if (lazyToLoad) {
      // delay the loading to the component's render phrase
      widget = lazy(startToLoad)
    } else {
      // load immediately
      const promiseThatResolvesToWidget = startToLoad()
      // but lazy to resolve
      widget = lazy(async () => promiseThatResolvesToWidget)
    }

    // wrap with a suspense
    const {
      hoc: { suspense: suspenseOptions },
    } = loadConfig

    return withSuspense(suspenseOptions, lazyToLoad)(widget)
  }
}

export default Loader
