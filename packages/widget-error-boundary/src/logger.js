import WidgetLogger from '@alicloud/widget-logger'
import { getWidgetInfo } from '@alicloud/widget-utils-console'


// const model = {
//   id: 'widget-test',
//   e_msg: '',
//   e_stack: '',
//   c_stack: '',


//   version: '',
//   e_code: 'render',
//   time: ''

//   uid: '',
//   parent_uid: '',
//   loc: `${location.origin}${location.pathname}`,
//   ua: navigator.userAgent,
// }


/**
 * error boundary 的错误是这样，一旦发生错误，就会展示 fallback
 * `componentDidCatch` 会在错误发生后执行，但其实我们可以尝试恢复错误
 * 错误恢复后，问题不一定解决，但也有可能自动就解决了，比如说网络异常，
 * 过一会儿又好了。我们在上报错误需要在每一次执行 `componentDidCatch`
 * 的时候上报，每一次上报
 */
const {
  version = process.env.WIDGET_VER,
  loader
} = getWidgetInfo()

class WidgetErrorLogger extends WidgetLogger {
  constructor(props, opts) {
    super({
      version,
      loader,
      time: Date.now(),
      e_code: 'render',
      ...props
    }, {
      debug: true,
      storeType: 'error',
      ...opts
    })
  }
}

export default WidgetErrorLogger
