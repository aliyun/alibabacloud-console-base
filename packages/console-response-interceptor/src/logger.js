import WidgetLogger from '@alicloud/widget-logger'
import { getWidgetInfo } from '@alicloud/widget-utils-console'
import { URLSearchParams } from '@alicloud/search-params-interceptor'

/**
 * MODEL
 * loc: http://127.0.0.1:12306
 * ua: xxx
 * uid: xxx
 * parent_uid: xxx
 * id: widget-test
 * version: 1.6.1
 * loader: 3.3.0
 *
 * start_time: 1561965371356
 * end_time: 1561965371356
 * cost: 300
 * trace_id: ac3243ljlkfasdlj34032423jl
 * code: 200
 * msg: ''
 * api: /data/api.json?action=DescribeVpcs
 * success: 1
 */
const {
  id = process.env.WIDGET_ID,
  version = process.env.WIDGET_VER,
  loader
} = getWidgetInfo()

class WidgetAPILogger extends WidgetLogger {
  constructor(props, opts) {
    super({
      id,
      version,
      loader,
      ...props,
    }, {
      storeType: 'api',
      ...opts,
    })
  }

  log({ config, data, headers, status }) {
    // Time
    const { requestStartTime } = config
    this.state.start_time = requestStartTime
    this.state.end_time = Date.now()
    this.state.cost = this.state.end_time - this.state.start_time

    // Trace ID
    this.state.trace_id = headers['eagleeye-traceid']

    // Reponse Data
    if (status === 200 && data) {
      const { code, message, successResponse } = data
      this.state.code = code
      this.state.msg = message
      this.state.success = successResponse ? 1 : 0
    } else {
      this.state.code = status
      this.state.msg = 'Http request failed.'
      this.state.success = 0
    }

    // API
    const { url, data: dataStr } = config
    const requestData = new URLSearchParams(dataStr)
    const [targetUrl, targetApiType] = /\/data\/(.+)\.json/.exec(url)
    if (targetApiType.indexOf('multi') !== -1) {
      try {
        const actions = JSON.parse(requestData.get('actions'))
        let apiIdentifier = ''
        const actionSet = {}
        for (const item of actions) {
          if (!actionSet[item.action]) {
            actionSet[item.action] = 1
          }
        }
        for (const key of Object.keys(actionSet)) {
          apiIdentifier += `${key},`
        }
        this.state.api = `${targetUrl}?product=${requestData.get('product')}&action=${apiIdentifier}`
      } catch (err) {
        this.state.api = targetUrl
      }
    } else {
      this.state.api = `${targetUrl}?product=${requestData.get('product')}&action=${requestData.get('action')}`
    }

    this.send()
  }
}

export default WidgetAPILogger
