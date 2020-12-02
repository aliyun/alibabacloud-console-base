"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FetcherDemoRcMockSecurity;

var _react = _interopRequireWildcard(require("react"));

var _demoRcElements = require("@alicloud/demo-rc-elements");

var _injectScript = _interopRequireDefault(require("../../util/inject-script"));

/**
 * 模拟安全参数所需的全局依赖
 */
function FetcherDemoRcMockSecurity() {
  (0, _react.useEffect)(function () {
    var win = window;

    if (!win.UA_Opt) {
      var LOG_VAL = 'collina_fucking_by_boshit';
      win.UA_Opt = {
        LogVal: LOG_VAL,
        Token: "".concat(Date.now(), ":").concat(Math.random()),
        MaxMCLog: 10,
        MaxKSLog: 20,
        MaxMPLog: 5,
        MPInterval: 50,
        MaxTCLog: 50,
        MaxFocusLog: 5,
        SendMethod: 8,
        Flag: 97422,
        isSendError: 1
      };
      win[LOG_VAL] = '';
    }

    (0, _injectScript.default)('//acjs.aliyun.com/js/uab.js');
  }, []);
  (0, _react.useEffect)(function () {
    var win = window;

    if (!win.ALIYUN_CONSOLE_CONFIG) {
      win.ALIYUN_CONSOLE_CONFIG = {};
    }

    win.ALIYUN_CONSOLE_CONFIG.SEC_TOKEN = '__mock_sec_token__';
  }, []);
  (0, _react.useEffect)(function () {
    return (0, _injectScript.default)('//g.alicdn.com/security/umscript/3.3.35/um.js');
  }, []); // 2.1.4

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demoRcElements.H2, null, "\u5B89\u5168\u53C2\u6570 Mocking"), /*#__PURE__*/_react.default.createElement(_demoRcElements.List, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, "collina"), " \u811A\u672C ", /*#__PURE__*/_react.default.createElement("code", null, "uab.js"), " \u5DF2\u6CE8\u5165"), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, "sec_token"), " \u5DF2\u7528 OneConsole \u6807\u51C6\u6A21\u5F0F\u6CE8\u5165"), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, "umid"), " \u811A\u672C ", /*#__PURE__*/_react.default.createElement("code", null, "um.js"), " \u5DF2\u6CE8\u5165")));
}