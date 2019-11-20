import axios from 'axios'
import {
  getParentUid,
  getCurrentUid,
  isWidgetPreEnv
} from '@alicloud/widget-utils-console'
import isDevEnv from './utils/isDevEnv'
import getOrigin from './utils/getOrigin'

// Reexport `getOrigin`
export { getOrigin }


const request = axios.create()

class WidgetLogger {
  constructor(props, { debug = false, storeType, logApiVersion = '0.6.0' }) {
    this.debug = debug
    this.storeType = storeType
    this.logApiVersion = logApiVersion

    this.state = {
      uid: getCurrentUid(),
      parent_uid: getParentUid(),
      loc: `${getOrigin()}${window.location.pathname}`,
      ua: navigator.userAgent,
      ...props
    }
  }

  getURL() {
    return `https://widget-log.cn-hangzhou.log.aliyuncs.com/logstores/${this.storeType}-log/track?APIVersion=${this.logApiVersion}`
  }

  send(url = this.getURL()) {
    // If we are in debug mode, log to console
    if (this.debug) {
      /* eslint-disable no-console */
      console.group('Widget Track')
      console.log({
        ...this.state,
        __url__: this.getURL()
      })
      console.groupEnd('Widget Track')
      /* eslint-enable no-console */
    }

    // If we are in dev env, do not send the log state
    if(isDevEnv() || isWidgetPreEnv()) {
      return false
    }

    // Otherwise, send the log state
    request.get(url, { params: this.state })
  }
}

export default WidgetLogger
