import WidgetLogger from '@alicloud/widget-logger'
import { PACKAGE_VERSION } from '../../cons'


class WidgetErrorLogger extends WidgetLogger {
  constructor(props, opts) {
    super({
      loader: PACKAGE_VERSION,
      time: Date.now(),
      ...props
    }, {
      storeType: 'error',
      ...opts
    })
  }
}

export default WidgetErrorLogger
