"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetcherDemoInterceptorMockVerifyCodeUrl;

/**
 * 这个拦截器用于模拟 demo 中获取验证码
 * 
 * 使用 `fetcher.interceptRequest(fetcherDemoInterceptorMockVerifyCodeUrl)`
 */
function fetcherDemoInterceptorMockVerifyCodeUrl(config) {
  if (config.url === '/risk/sendVerifyMessage.json') {
    return {
      url: 'https://mocks.alibaba-inc.com/mock/boshit/risk-send-code'
    };
  }
}