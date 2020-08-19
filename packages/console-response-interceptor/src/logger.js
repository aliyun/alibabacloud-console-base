import Logger from '@alicloud/widget-logger'
import { getWidgetInfo } from '@alicloud/widget-utils-console'

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
  loader,
} = getWidgetInfo()

class APILogger extends Logger {
  constructor(opts) {
    super(
      'https://widget-log.cn-hangzhou.log.aliyuncs.com/logstores/api-log/track?APIVersion=0.6.0',
      opts
    )

    this._superLog = this.log
  }

  log({ config, data, headers, status }) {
    // Time
    const { requestStartTime } = config
    const end_time = Date.now()

    this._superLog({
      start_time: requestStartTime,
      end_time: end_time,
      cost: end_time - requestStartTime,
    })

    // Trace ID
    this._superLog('trace_id', headers['eagleeye-traceid'])

    // Reponse Data
    if (status === 200 && data) {
      const { code, message: msg, successResponse } = data
      this._superLog({
        code,
        msg,
        success: successResponse ? 1 : 0,
      })
    } else {
      this._superLog({
        code: status,
        msg: 'Http request failed.',
        success: 0,
      })
    }

    // API
    const { url, data: dataStr } = config
    const requestData = new URLSearchParams(dataStr)
    let targetUrl, targetApiType
    try {
      const match = /\/data\/(.+)\.json/.exec(url)
      if (!match) {
        throw new Error()
      }
      targetUrl = match[0]
      targetApiType = match[1]
    } catch (e) {
      targetUrl = url
      targetApiType = 'api'
    }

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

        this._superLog(
          'api',
          `${targetUrl}?product=${requestData.get(
            'product'
          )}&action=${apiIdentifier}`
        )
      } catch (err) {
        this._superLog('api', targetUrl)
      }
    } else {
      this._superLog(
        'api',
        `${targetUrl}?product=${requestData.get(
          'product'
        )}&action=${requestData.get('action')}`
      )
    }

    // Loader Info
    this._superLog({
      id,
      version,
      loader,
    })

    this.send()
  }
}

export default APILogger
