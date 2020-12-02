import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import qs from 'qs';
import fetch from '@alicloud/fetcher-fetch';
import getSystemParams from '../util/get-system-params';

function noop() {} // eslint-disable-line @typescript-eslint/no-empty-function


function doLog(logUrl) {
  fetch(logUrl, {
    timeout: 20000,
    // SLS 如果要启用 web log，必须 CORS，但不允许带 cookie，所以不可用 `include`，否则会报错：
    // 「Credential is not supported if the CORS header ‘Access-Control-Allow-Origin’ is ‘*’」
    credentials: 'omit'
  }).catch(noop);
}
/**
 * 创建 SLS 日志方法，一般直接用于项目。
 * 
 * 参考：Web Tracking <https://help.aliyun.com/document_detail/31752.html>
 */


export default function createLogger(factoryOptions) {
  var project = factoryOptions.project,
      endpoint = factoryOptions.endpoint,
      logstore = factoryOptions.logstore,
      _factoryOptions$apiVe = factoryOptions.apiVersion,
      apiVersion = _factoryOptions$apiVe === void 0 ? '0.6.0' : _factoryOptions$apiVe,
      defaultParams = factoryOptions.defaultParams,
      _factoryOptions$suppr = factoryOptions.suppressTime,
      suppressTime = _factoryOptions$suppr === void 0 ? 10000 : _factoryOptions$suppr,
      onBeforeSend = factoryOptions.onBeforeSend;
  var BASE_LOG_URL = "//".concat(project, ".").concat(endpoint, "/logstores/").concat(logstore, "/track"); // suppressTime 规定的时间内积压的日志，将被定时器设置为 null，null 之后就不再积压，而是立即上报

  var suppressedLogUrls = []; // 压制时间之后，上报积压的日志，并把 suppressedLogUrls 设置为 null 取消压制

  setTimeout(function () {
    if (suppressedLogUrls) {
      suppressedLogUrls.forEach(doLog);
      suppressedLogUrls = null;
    }
  }, suppressTime);

  function sls(topic, params) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (onBeforeSend && onBeforeSend(factoryOptions) === false) {
      return;
    }

    var paramsDefault = typeof defaultParams === 'function' ? defaultParams() : defaultParams;
    var logUrl = "".concat(BASE_LOG_URL, "?").concat(qs.stringify(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
      APIVersion: apiVersion,
      GROUP: options.group || 'LOG'
    }, getSystemParams()), paramsDefault), params), {}, {
      __topic__: topic
    })));

    if (suppressedLogUrls && !options.instant) {
      suppressedLogUrls.push(logUrl);
    } else {
      doLog(logUrl);
    }
  }

  sls.debug = function (topic, params, options) {
    return sls(topic, params, _objectSpread(_objectSpread({}, options), {}, {
      group: 'DEBUG'
    }));
  };

  sls.log = function (topic, params, options) {
    return sls(topic, params, _objectSpread(_objectSpread({}, options), {}, {
      group: 'LOG'
    }));
  };

  sls.info = function (topic, params, options) {
    return sls(topic, params, _objectSpread(_objectSpread({}, options), {}, {
      group: 'INFO'
    }));
  };

  sls.warn = function (topic, params, options) {
    return sls(topic, params, _objectSpread(_objectSpread({}, options), {}, {
      group: 'WARN'
    }));
  };

  sls.error = function (topic, params, options) {
    return sls(topic, params, _objectSpread(_objectSpread({}, options), {}, {
      group: 'ERROR'
    }));
  };

  sls.fatal = function (topic, params, options) {
    return sls(topic, params, _objectSpread(_objectSpread({}, options), {}, {
      group: 'FATAL'
    }));
  };

  sls.biz = function (topic, params, options) {
    return sls(topic, params, _objectSpread(_objectSpread({}, options), {}, {
      group: 'BIZ'
    }));
  };

  return sls;
}