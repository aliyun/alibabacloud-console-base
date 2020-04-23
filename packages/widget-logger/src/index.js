import axios from 'axios'
import UAParser from 'ua-parser-js'
import {
  getParentUid,
  getCurrentUid,
  isWidgetPreEnv,
} from '@alicloud/widget-utils-console'
import isDevEnv from './utils/isDevEnv'
import getOrigin from './utils/getOrigin'
import isCNSite from './utils/isCNSite'

// Reexport `getOrigin`
export { getOrigin }

function getBrowser() {
  try {
    const parser = new UAParser()
    const browser = parser.getBrowser()

    return `${browser.name}/${browser.major}`
  } catch (e) {
    return undefined
  }
}

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
      bs: getBrowser(),
      ...props,
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
        __url__: this.getURL(),
      })
      console.groupEnd('Widget Track')
      /* eslint-enable no-console */
    }

    // If we are in dev env, do not send the log state
    if (isDevEnv() || isWidgetPreEnv()) {
      return false
    }

    // Only send in CN site
    if (!isCNSite()) {
      return false
    }

    // Otherwise, send the log state
    request.get(url, { params: this.state })
  }
}

export default WidgetLogger
