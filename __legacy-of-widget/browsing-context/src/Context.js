import Window from './Window'
import Document from './Document'
import Location from './Location'
import History from './History'
import hijackElement from './hijackElement'
import injectStyle from './utils/injectStyle'

/**
 * Context class
 * It uses iframe to create nesting browsing contexts under the top one
 */
class Context {
  constructor(opts, frame) {
    this.accessRecords = []

    // hack frame.contentWindow.Element.prototype
    // Since different browsing context have total different globals,
    // so it won't have any global influences to the top context.
    hijackElement(opts, frame.contentWindow.Element, this)

    // proxy globals
    this.window = new Window(opts, this, frame)
    this.document = new Document(opts, this, frame)
    this.location = new Location(opts, this, frame)
    this.history = new History(opts, this, frame)
    this.self = this.window

    // expose the underlying iframe element
    this.frame = frame

    // expose a style injection util
    this.injectStyleToHostDocument = (cssText) => injectStyle(cssText, opts)
  }

  remove() {
    this.document.removeEventListeners()

    if (this.frame) {
      if (this.frame.parentNode) {
        this.frame.parentNode.removeChild(this.frame)
      }
    }
  }

  addAccessRecord(record) {
    this.accessRecords = [
      ...this.accessRecords,
      {
        ...record,
        time: Date.now(),
      },
    ]
  }

  addGetRecord(record) {
    this.addAccessRecord({
      type: 'get',
      ...record,
    })
  }

  addSetRecord(record) {
    this.addAccessRecord({
      type: 'set',
      ...record,
    })
  }

  getAccessRecords() {
    return this.accessRecords
  }

  getWindowAccessRecords() {
    return this.accessRecords.filter((r) => r.targetName === 'window')
  }

  getDocumentAccessRecords() {
    return this.accessRecords.filter((r) => r.targetName === 'document')
  }

  getLocationAccessRecords() {
    return this.accessRecords.filter((r) => r.targetName === 'location')
  }

  getHistoryAccessRecords() {
    return this.accessRecords.filter((r) => r.targetName === 'history')
  }

  getReadAccessRecords() {
    return this.accessRecords.filter((r) => r.type === 'get')
  }

  getWriteAccessRecords() {
    return this.accessRecords.filter((r) => r.type === 'set')
  }

  getDangerousAccessRecords() {
    return this.accessRecords.filter((r) => r.danger === true)
  }

  static create(opts) {
    const iframe = document.createElement('iframe')
    // use "about:blank" may trigger cross origin problems
    iframe.src = 'about:blank'
    iframe.style.cssText = 'display:none'

    if (opts.id) {
      iframe.id = opts.id
    }

    document.appendChild(iframe)

    return new this(opts, iframe)
  }

  static remove(ctx) {
    ctx.remove && ctx.remove()
  }
}

export default Context
