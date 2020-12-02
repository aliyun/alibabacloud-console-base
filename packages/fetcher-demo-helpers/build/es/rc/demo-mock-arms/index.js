import React, { useEffect } from 'react';
import { H2 } from '@alicloud/demo-rc-elements';
import injectScript from '../../util/inject-script';

/**
 * 模拟埋入 arms 脚本
 * 文档：<https://yuque.antfin-inc.com/console/fzmkgr/smqpr2>
 */
export default function DemoInjectArms() {
  useEffect(function () {
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
    injectScript('https://retcode.alicdn.com/retcode/bl.js');
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H2, null, "ARMS Mocking"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "ARMS"), " \u811A\u672C ", /*#__PURE__*/React.createElement("code", null, "bl.js"), " \u5DF2\u6CE8\u5165"));
}