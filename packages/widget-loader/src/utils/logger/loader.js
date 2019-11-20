import WidgetLogger from '@alicloud/widget-logger'
import { PACKAGE_VERSION } from '../../cons'


class WidgetLoaderLogger extends WidgetLogger {
  constructor(props, opts) {
    super({
      loader: PACKAGE_VERSION,
      ...props
    }, {
      storeType: 'loader',
      ...opts
    })

    // This is when starting to load the widget script
    this.widget_start_time = ''
    // This is when the widget script finish loading
    this.widget_end_time = ''
  }

  // Keep the actuall loaded version
  version(ver) {
    this.state.version = ver
  }

  location(loc) {
    this.state.loc = loc
  }

  start() {
    this.state.start_time = Date.now()
  }

  end() {
    this.state.end_time = Date.now()
    this.state.duration = this.widget_end_time - this.widget_start_time
    this.state.cost = this.state.end_time - this.state.start_time
    this.send()
  }

  error({ code, message, stack }) {
    this.state.e_code = code
    this.state.e_msg = message
    this.state.e_stack = stack

    this.state.end_time = Date.now()
    this.state.cost = this.state.end_time - this.state.start_time

    this.send()
  }

  startToLoadWidget() {
    this.widget_start_time = Date.now()
  }

  endLoadingWidget() {
    this.widget_end_time = Date.now()
  }
}


export default WidgetLoaderLogger
