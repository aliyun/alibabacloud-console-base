"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ERROR_TIMEOUT", {
  enumerable: true,
  get: function get() {
    return _const.ERROR_TIMEOUT;
  }
});
Object.defineProperty(exports, "ERROR_NETWORK", {
  enumerable: true,
  get: function get() {
    return _const.ERROR_NETWORK;
  }
});
Object.defineProperty(exports, "ERROR_RESPONSE_STATUS", {
  enumerable: true,
  get: function get() {
    return _const.ERROR_RESPONSE_STATUS;
  }
});
Object.defineProperty(exports, "ERROR_RESPONSE_PARSE", {
  enumerable: true,
  get: function get() {
    return _const.ERROR_RESPONSE_PARSE;
  }
});
Object.defineProperty(exports, "createFetcher", {
  enumerable: true,
  get: function get() {
    return _createFetcher.default;
  }
});
exports.FetcherUtils = exports.default = void 0;

var _const = require("./const");

var _createFetcher = _interopRequireDefault(require("./util/create-fetcher"));

var _create = _interopRequireDefault(require("./util/error/create"));

var _createSkipNetwork = _interopRequireDefault(require("./util/error/create-skip-network"));

var _buildUrl = _interopRequireDefault(require("./util/build-url"));

var _canHaveBody = _interopRequireDefault(require("./util/can-have-body"));

var _isCors = _interopRequireDefault(require("./util/is-cors"));

var _mergeConfig = _interopRequireDefault(require("./util/merge-config"));

var _extractProtocolHost = _interopRequireDefault(require("./util/extract-protocol-host"));

var FetcherUtils = {
  createError: _create.default,
  createErrorSkipNetwork: _createSkipNetwork.default,
  buildUrl: _buildUrl.default,
  canHaveBody: _canHaveBody.default,
  isCors: _isCors.default,
  mergeConfig: _mergeConfig.default,
  extractProtocolHost: _extractProtocolHost.default
};
exports.FetcherUtils = FetcherUtils;
var fetcher = (0, _createFetcher.default)();
fetcher.sealInterceptors();
var _default = fetcher; // 常量与工具
// 类型

exports.default = _default;