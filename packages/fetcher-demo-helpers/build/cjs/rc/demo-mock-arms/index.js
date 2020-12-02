"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DemoInjectArms;

var _react = _interopRequireWildcard(require("react"));

var _demoRcElements = require("@alicloud/demo-rc-elements");

var _injectScript = _interopRequireDefault(require("../../util/inject-script"));

/**
 * 模拟埋入 arms 脚本
 * 文档：<https://yuque.antfin-inc.com/console/fzmkgr/smqpr2>
 */
function DemoInjectArms() {
  (0, _react.useEffect)(function () {
    if (window.__bl) {
      return;
    }

    window.__bl = {
      config: {
        pid: 'ad45dhvr9m@6594c08d3216a5d',
        imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?',
        uid: 'UID',
        tag: 'TAG',
        // release: '1.3.4',
        environment: 'daily',
        disableHook: true
      }
    };
    (0, _injectScript.default)('https://retcode.alicdn.com/retcode/bl.js');
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demoRcElements.H2, null, "ARMS Mocking"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("strong", null, "ARMS"), " \u811A\u672C ", /*#__PURE__*/_react.default.createElement("code", null, "bl.js"), " \u5DF2\u6CE8\u5165"));
}