"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createInterceptor;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _consoleLoggerSls = _interopRequireWildcard(require("@alicloud/console-logger-sls"));

var _removeSecParamsFromBody = _interopRequireDefault(require("./remove-sec-params-from-body"));

var _shouldIgnoreError = _interopRequireDefault(require("./should-ignore-error"));

function createInterceptor(_ref) {
  var _ref$topicError = _ref.topicError,
      topicError = _ref$topicError === void 0 ? 'api_error' : _ref$topicError,
      logstoreDev = _ref.logstoreDev,
      logstoreDaily = _ref.logstoreDaily,
      logstorePre = _ref.logstorePre,
      shouldIgnore = _ref.shouldIgnore,
      slsOptions = (0, _objectWithoutProperties2.default)(_ref, ["topicError", "logstoreDev", "logstoreDaily", "logstorePre", "shouldIgnore"]);
  slsOptions.logstore = (0, _consoleLoggerSls.chooseStoreByEnv)(slsOptions.logstore, {
    dev: logstoreDev,
    daily: logstoreDaily,
    pre: logstorePre
  });
  var sls = (0, _consoleLoggerSls.default)(slsOptions);
  return function (err, fetcherConfig, response) {
    var _err$name, _err$code, _err$message, _response$data;

    if (!err || (0, _shouldIgnoreError.default)(err, shouldIgnore)) {
      throw err;
    }

    var slsParams = {
      fetcherMethod: fetcherConfig.method,
      fetcherUrl: fetcherConfig.url,
      fetcherUrlBase: fetcherConfig.urlBase,
      fetcherParams: fetcherConfig.params,
      fetcherBody: (0, _removeSecParamsFromBody.default)(fetcherConfig.body),
      errorName: (_err$name = err.name) !== null && _err$name !== void 0 ? _err$name : '__no_name__',
      errorCode: (_err$code = err.code) !== null && _err$code !== void 0 ? _err$code : '__no_code__',
      errorMessage: (_err$message = err.message) !== null && _err$message !== void 0 ? _err$message : '__no_message__',
      requestId: response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.requestId,
      eagleEyeTraceId: response === null || response === void 0 ? void 0 : response.headers['Eagleeye-Traceid']
    };
    sls.error(topicError, slsParams);
    throw err;
  };
}