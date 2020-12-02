import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import createLogger, { chooseStoreByEnv } from '@alicloud/console-logger-sls';
import removeSecParamsFromBody from './remove-sec-params-from-body';
import shouldIgnoreError from './should-ignore-error';
export default function createInterceptor(_ref) {
  var _ref$topicError = _ref.topicError,
      topicError = _ref$topicError === void 0 ? 'api_error' : _ref$topicError,
      logstoreDev = _ref.logstoreDev,
      logstoreDaily = _ref.logstoreDaily,
      logstorePre = _ref.logstorePre,
      shouldIgnore = _ref.shouldIgnore,
      slsOptions = _objectWithoutProperties(_ref, ["topicError", "logstoreDev", "logstoreDaily", "logstorePre", "shouldIgnore"]);

  slsOptions.logstore = chooseStoreByEnv(slsOptions.logstore, {
    dev: logstoreDev,
    daily: logstoreDaily,
    pre: logstorePre
  });
  var sls = createLogger(slsOptions);
  return function (err, fetcherConfig, response) {
    var _err$name, _err$code, _err$message, _response$data;

    if (!err || shouldIgnoreError(err, shouldIgnore)) {
      throw err;
    }

    var slsParams = {
      fetcherMethod: fetcherConfig.method,
      fetcherUrl: fetcherConfig.url,
      fetcherUrlBase: fetcherConfig.urlBase,
      fetcherParams: fetcherConfig.params,
      fetcherBody: removeSecParamsFromBody(fetcherConfig.body),
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