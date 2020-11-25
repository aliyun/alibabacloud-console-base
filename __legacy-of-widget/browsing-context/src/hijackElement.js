import injectScript from './utils/injectScript'
import injectStyle from './utils/injectStyle'

/**
 * All operations that add scripts and styles to the document.head of sub contexts
 * are all redirect to the document.head of the host document
 */
function hijackElement(opts, Element, ctx) {
  // this list may increase
  const hijackingMethods = ['appendChild', 'insertBefore']

  for (const method of hijackingMethods) {
    // keep the origin method
    const originMethod = Element.prototype[method]

    Element.prototype[method] = function (newNode, ...args) {
      switch (newNode.nodeName) {
        case 'STYLE':
          return injectStyle(newNode, opts)
        case 'SCRIPT':
          return injectScript(newNode, ctx.window)
        default:
          return originMethod.call(this, newNode, ...args)
      }
    }
  }

  // hijack properties

  // it's a good convention to always use the explicit alias to access top
  // browsing context globals, it helps to avoid ambiguity with
  // the nesting browsing context globals
  const hostDocument = document
  const hijackingProperties = ['clientWidth', 'clientHeight']

  for (const prop of hijackingProperties) {
    const originDescriptor = Object.getOwnPropertyDescriptor(
      Element.prototype,
      prop
    )
    Object.defineProperty(Element.prototype, prop, {
      ...originDescriptor,
      get() {
        if (this.nodeName === 'HTML') {
          return hostDocument.documentElement[prop]
        }
        return originDescriptor.get.call(this)
      },
    })
  }

  // hijack removeChild
  const originRemoveChild = Element.prototype.removeChild
  Element.prototype.removeChild = function (child) {
    if (child.nodeName === 'SCRIPT' || child.nodeName === 'STYLE') {
      console.error('hijack: removeChild', this, child) // eslint-disable-line
    }
    return originRemoveChild.call(this, child)
  }

  // hijack remove
  const originRemove = Element.prototype.remove
  Element.prototype.remove = function () {
    if (this.nodeName === 'SCRIPT' || this.nodeName === 'STYLE') {
      console.error('hijack: remove', this) // eslint-disable-line
    }
    return originRemove.call(this)
  }
}

export default hijackElement
