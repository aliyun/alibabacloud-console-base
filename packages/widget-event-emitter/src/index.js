import EventEmitter from 'wolfy87-eventemitter'

class WidgetEventEmitter extends EventEmitter {
  constructor() {
    super()
  }

  refresh(widgetId) {
    return this.emit(`${widgetId}:REFRESH`)
  }
}

export default WidgetEventEmitter
