import React, { useEffect } from 'react';
import { H2, List } from '@alicloud/demo-rc-elements';
import injectScript from '../../util/inject-script';

/**
 * 模拟安全参数所需的全局依赖
 */
export default function FetcherDemoRcMockSecurity() {
  useEffect(function () {
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

    injectScript('//acjs.aliyun.com/js/uab.js');
  }, []);
  useEffect(function () {
    var win = window;

    if (!win.ALIYUN_CONSOLE_CONFIG) {
      win.ALIYUN_CONSOLE_CONFIG = {};
    }

    win.ALIYUN_CONSOLE_CONFIG.SEC_TOKEN = '__mock_sec_token__';
  }, []);
  useEffect(function () {
    return injectScript('//g.alicdn.com/security/umscript/3.3.35/um.js');
  }, []); // 2.1.4

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H2, null, "\u5B89\u5168\u53C2\u6570 Mocking"), /*#__PURE__*/React.createElement(List, null, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "collina"), " \u811A\u672C ", /*#__PURE__*/React.createElement("code", null, "uab.js"), " \u5DF2\u6CE8\u5165"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "sec_token"), " \u5DF2\u7528 OneConsole \u6807\u51C6\u6A21\u5F0F\u6CE8\u5165"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "umid"), " \u811A\u672C ", /*#__PURE__*/React.createElement("code", null, "um.js"), " \u5DF2\u6CE8\u5165")));
}