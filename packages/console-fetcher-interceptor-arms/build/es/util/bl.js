function log(info) {
  var _bl$_conf;

  var bl = window.__bl;

  if (!(bl !== null && bl !== void 0 && (_bl$_conf = bl._conf) !== null && _bl$_conf !== void 0 && _bl$_conf.disableHook)) {
    return;
  }

  var api = info.api,
      success = info.success,
      code = info.code,
      message = info.message,
      timeStarted = info.timeStarted,
      traceId = info.traceId;
  var duration = timeStarted ? Date.now() - timeStarted : -1;

  if (bl.api) {
    bl.api(api, success, duration, code, message, timeStarted, traceId);
  } else {
    bl.pipe = bl.pipe || [];
    bl.pipe.push(['api', api, success, duration, code, message, timeStarted, traceId]);
  }
}

export function logError(_ref) {
  var api = _ref.api,
      _ref$code = _ref.code,
      code = _ref$code === void 0 ? 'UNKNOWN' : _ref$code,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? '' : _ref$message,
      timeStarted = _ref.timeStarted,
      traceId = _ref.traceId;
  log({
    api: api,
    timeStarted: timeStarted,
    traceId: traceId,
    success: false,
    code: code,
    message: message
  });
}
export function logSuccess(_ref2) {
  var api = _ref2.api,
      timeStarted = _ref2.timeStarted,
      traceId = _ref2.traceId;
  log({
    api: api,
    timeStarted: timeStarted,
    traceId: traceId,
    success: true,
    code: '200',
    message: ''
  });
}