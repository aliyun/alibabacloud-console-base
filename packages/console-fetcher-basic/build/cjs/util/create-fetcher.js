"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _fetcher = require("@alicloud/fetcher");

var _consoleFetcherInterceptorReqSecurity = _interopRequireDefault(require("@alicloud/console-fetcher-interceptor-req-security"));

var _consoleFetcherInterceptorFecs = _interopRequireDefault(require("@alicloud/console-fetcher-interceptor-fecs"));

var _consoleFetcherInterceptorResErrorMessage = _interopRequireDefault(require("@alicloud/console-fetcher-interceptor-res-error-message"));

var _consoleFetcherInterceptorResBiz = _interopRequireDefault(require("@alicloud/console-fetcher-interceptor-res-biz"));

var _consoleFetcherInterceptorArms = _interopRequireDefault(require("@alicloud/console-fetcher-interceptor-arms"));

var _consoleFetcherInterceptorSls = _interopRequireDefault(require("@alicloud/console-fetcher-interceptor-sls"));

var _const = require("../const");

var _createApi = _interopRequireDefault(require("./create-api"));

var _createMultiApi = _interopRequireDefault(require("./create-multi-api"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = function _default(config) {
  var interceptorOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var slsConfig = interceptorOptions.slsConfig,
      armsConfig = interceptorOptions.armsConfig;
  var fetcher = (0, _fetcher.createFetcher)(config);
  (0, _consoleFetcherInterceptorReqSecurity.default)(fetcher);
  (0, _consoleFetcherInterceptorFecs.default)(fetcher);
  (0, _consoleFetcherInterceptorResErrorMessage.default)(fetcher);
  (0, _consoleFetcherInterceptorResBiz.default)(fetcher);
  (0, _consoleFetcherInterceptorArms.default)(fetcher, armsConfig);

  if (slsConfig) {
    (0, _consoleFetcherInterceptorSls.default)(fetcher, slsConfig);
  }

  return _objectSpread(_objectSpread({}, fetcher), {}, {
    callOpenApi: (0, _createApi.default)(fetcher.post, _const.ETypeApi.OPEN),
    callInnerApi: (0, _createApi.default)(fetcher.post, _const.ETypeApi.INNER),
    callContainerApi: (0, _createApi.default)(fetcher.post, _const.ETypeApi.CONTAINER),
    callMultiOpenApi: (0, _createMultiApi.default)(fetcher.post, _const.ETypeApiMulti.OPEN)
  });
};

exports.default = _default;