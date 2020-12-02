"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SLS_OPTIONS = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _consoleLoggerSls = _interopRequireWildcard(require("@alicloud/console-logger-sls"));

var _consoleBaseConfProductId = _interopRequireDefault(require("@alicloud/console-base-conf-product-id"));

var _getVersions3 = _interopRequireDefault(require("./util/get-versions"));

var _getVersions = (0, _getVersions3.default)(),
    _getVersions2 = (0, _slicedToArray2.default)(_getVersions, 2),
    loaderVersions = _getVersions2[0],
    consoleBaseVersions = _getVersions2[1];

var SLS_OPTIONS = {
  // export 出去，在 console-base-fetcher 里会用到
  project: 'console-base',
  endpoint: 'log-global.aliyuncs.com',
  logstore: (0, _consoleLoggerSls.chooseStoreByEnv)('prod', {
    dev: 'dev',
    daily: 'daily',
    pre: 'pre'
  }),
  defaultParams: {
    product: _consoleBaseConfProductId.default,
    versionOfLoader: loaderVersions.join('~') || 'NONE',
    // 本地的时候可能是 NONE
    versionOfConsoleBase: consoleBaseVersions.join('~') || 'NONE' // 本地的时候可能是 NONE

  }
};
/**
 * console-base 专用 logger
 */

exports.SLS_OPTIONS = SLS_OPTIONS;

var _default = (0, _consoleLoggerSls.default)(SLS_OPTIONS);

exports.default = _default;