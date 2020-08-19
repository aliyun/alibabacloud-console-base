/**
 * ------------------------------- Document ------------------------------------
 *
 * 对于整个应用来说，我们的设计核心是一个 document ，即主应用的 document 。因为我们仍旧是
 * 一个单页面应用，我们所有的 DOM 操作应该正确反应在页面（主应用 document）上。
 *
 * 基于以上的设计指导思想，我们依旧提供了一个虚拟化的 ctx.document 给子应用，核心考量因素就一个：
 *
 *   我们不希望改动主应用的 Element.prototype 对象，这是一个非常有风险的操作。
 *
 * 因此我们的做法是，把虚拟化的 document 提供给子应用，然后我们可以修改虚拟化的 browsing
 * context 对应的 Element.prototype 来劫持我们关心的 DOM 操作。
 *
 * 另外，对于 document 的操作一般来说无外乎两部分：
 *
 * 1. document.head
 * 2. document.body
 *
 * head
 *
 * 我们不希望子应用直接操作 head 对象，因此我们让它操作 ctx.document.head ，然后把操作
 * 结果经我们处理后同步到主应用的 document.head 中。
 * 一般来说对 head 的操作，大概率是添加 style 和 script 标签。
 *
 * body
 *
 * 而 body 对象，我们也不想把 document.body 直接给到子应用，我们会手动在 body 下创建一个
 * section ，然后把这个 section 作为子应用的 body 供其做相关的 DOM 操作
 *
 * -----------------------------------------------------------------------------
 * TO BE IMPROVED...
 * -----------------------------------------------------------------------------
 */
import { LOG_LEVEL } from './cons'
import querySelectorAll from './utils/querySelectorAll'

class Document {
  constructor(opts = {}, ctx, frame) {
    // it's a good convention to always use the explicit alias to access top
    // browsing context globals, it helps to avoid ambiguity with
    // the nesting browsing context globals
    const hostDocument = document

    const { logLevel = LOG_LEVEL.NONE } = opts

    let { body } = opts
    if (!body) {
      body = hostDocument.createElement('section')
      if (opts.rootId) {
        body.id = opts.rootId
      }
      body.className = opts.rootClassName
      hostDocument.body.appendChild(body)
    }

    const eventListeners = []

    return new Proxy(frame.contentDocument, {
      set(target, name, value) {
        ctx.addSetRecord({
          targetName: 'document',
          name,
          value,
        })

        return Reflect.set(target, name, value)
      },

      /* eslint-disable default-case, no-console */
      get(target, name) {
        ctx.addGetRecord({
          targetName: 'document',
          name,
        })

        switch (name) {
          // whitelist property of document
          case 'URL':
          case 'baseURI':
          case 'documentURI':
          case 'documentElement':
          case 'referer':
          case 'scripts':
            return hostDocument[name]

          case 'defaultView':
            return ctx.window

          // use a section element serve as the body for nesting document
          case 'body':
            return body

          case 'querySelector':
            return (args) => {
              logLevel === LOG_LEVEL.VERBOSE &&
                console.warn(`[querySelector] ${args}`)

              if (args === 'html' || args === 'head') {
                return target.querySelector.call(target, args)
              }
              if (args === 'body') {
                return body
              }
              return body.querySelector.call(body, args)
            }

          case 'querySelectorAll':
            return (args) => {
              logLevel === LOG_LEVEL.VERBOSE &&
                console.warn(`[querySelectorAll] ${args}`)

              const roots = document.getElementsByClassName(opts.rootClassName)

              if (args === 'html' || args === 'head') {
                return target.querySelectorAll.call(target, args)
              }
              if (args === 'body') {
                return [body]
              }
              return querySelectorAll(roots, args)
            }

          case 'getElementsByTagName':
            return (args) => {
              logLevel === LOG_LEVEL.VERBOSE &&
                console.warn(`[getElementsByTagName] ${args}`)

              if (args === 'html' || args === 'head') {
                return target.getElementsByTagName.call(target, args)
              }
              if (args === 'body') {
                return body
              }
              return body.getElementsByTagName.call(body, args)
            }

          case 'getElementsByClassName':
            return (args) => {
              logLevel === LOG_LEVEL.VERBOSE &&
                console.warn(`[getElementsByClassName] ${args}`)

              return body.getElementsByClassName.call(body, args)
            }

          case 'getElementById':
            return (args) => {
              logLevel === LOG_LEVEL.VERBOSE &&
                console.warn(`[getElementById] ${args}`)

              return hostDocument.getElementById.call(hostDocument, args)
            }

          case 'addEventListener':
            return (...args) => {
              eventListeners.push(args)
              return hostDocument.addEventListener(...args)
            }

          case 'removeEventListener':
            return (...args) => hostDocument.removeEventListener(...args)

          case 'removeEventListeners':
            return () => {
              for (const args of eventListeners) {
                hostDocument.removeEventListener(...args)
              }
            }
        }

        if (typeof target[name] === 'function') {
          return target[name].bind && target[name].bind(target)
        } else {
          return Reflect.get(target, name)
        }
      },
    })
  }
}

export default Document
