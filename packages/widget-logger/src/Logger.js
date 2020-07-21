import axios from 'axios'
import isCNSite from './utils/isCNSite'
import isLocalEnv from './utils/isLocalEnv'
import getLocation from './utils/getLocation'
import getBrowser from './utils/getBrowser'
import getUid from './utils/getUid'

const fetch = axios.create().get

class Logger {
  constructor(
    endpoint,
    {
      debug = false,
      autoTimestamp = false,
      CNSiteOnly = true,
      autoUid = true,
      autoLocation = true,
      autoBrowser = true,
    }
  ) {
    this._endpoint = endpoint
    this._debug = debug
    this._CNSiteOnly = CNSiteOnly
    this._autoTimestamp = autoTimestamp
    this._autoUid = autoUid
    this._autoLocation = autoLocation
    this._autoBrowser = autoBrowser

    this._timers = {}

    this._state = {}
  }

  log(k, v) {
    const prevState = this._state
    let newState = {}

    if (typeof k === 'object' && typeof v === 'undefined') {
      newState = k
    }

    if (typeof k === 'string' && typeof v !== 'undefined') {
      newState = {
        [k]: v,
      }
    }

    this._state = {
      ...prevState,
      ...newState,
    }
  }

  timeStart(label) {
    const { _timers } = this
    if (_timers[label]) {
      return false
    }
    const startTime = Date.now()
    _timers[label] = startTime
  }

  timeEnd(label) {
    const { _timers } = this
    const startTime = _timers[label]
    // clearTimer
    _timers[label] = undefined
    if (!startTime) {
      return false
    }
    const endTime = Date.now()
    const duration = endTime - startTime
    // keep the log
    this.log(label, duration)
  }

  print() {
    /* eslint-disable no-console */
    console.group('Widget Log')
    console.log(this._state)
    console.groupEnd('Widget Log')
    /* eslint-enable no-console */
  }

  send(k, v) {
    this.log(k, v)

    this._autoTimestamp && this.log('timestamp', Date.now())
    this._autoUid && this.log('uid', getUid())
    this._autoLocation && this.log('loc', getLocation())
    this._autoBrowser && this.log('bs', getBrowser())

    if (this._debug || isLocalEnv()) {
      return this.print()
    }

    if (!this._endpoint) {
      return false
    }

    if (this._CNSiteOnly && !isCNSite()) {
      return false
    }

    fetch(this._endpoint, { params: this._state })
  }
}

export default Logger
