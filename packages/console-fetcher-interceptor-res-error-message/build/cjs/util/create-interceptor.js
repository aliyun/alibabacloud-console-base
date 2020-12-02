"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createInterceptor;

var _fetcher = require("@alicloud/fetcher");

var _intl = _interopRequireDefault(require("../intl"));

function createInterceptor() {
  return function (err, config) {
    // @alicloud/fetcher 给出的错误没有国际化 - 因为 fetcher 是最基础的，不想让它跟 console 环境有关，所以这些错误会在这里做对应的国际化
    switch (err === null || err === void 0 ? void 0 : err.name) {
      case _fetcher.ERROR_NETWORK:
        err.message = (0, _intl.default)('message:error_network');
        break;

      case _fetcher.ERROR_TIMEOUT:
        err.message = (0, _intl.default)('message:error_timeout_{n}ms', {
          n: config.timeout
        });
        break;

      case _fetcher.ERROR_RESPONSE_STATUS:
        err.message = (0, _intl.default)('message:error_response_status');
        break;

      default:
        break;
    }

    throw err;
  };
}