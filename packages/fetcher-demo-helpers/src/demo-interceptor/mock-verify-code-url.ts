import {
  IDemoConfig
} from '../types';

/**
 * 这个拦截器用于模拟 demo 中获取验证码
 * 
 * 使用 `fetcher.interceptRequest(fetcherDemoInterceptorMockVerifyCodeUrl)`
 */
export default function fetcherDemoInterceptorMockVerifyCodeUrl(config: IDemoConfig): Partial<IDemoConfig> | undefined {
  switch (config.url) {
    case '/risk/sendVerifyMessage.json':
      return {
        url: 'https://oneapi.alibaba-inc.com/mock/boshit/risk-send-code'
      };
    case '/identity/getMfaInfoToBind':
      return {
        url: 'https://oneapi.alibaba-inc.com/mock/boshit/risk-get-mfa-info-to-bind'
      };
    case '/identity/getMfaInfoToAuth':
      return {
        url: 'https://oneapi.alibaba-inc.com/mock/boshit/risk-get-mfa-info-to-auth'
      };
    case '/identity/bindMFA':
      return {
        url: 'https://oneapi.alibaba-inc.com/mock/boshit/risk-bind-mfa'
      };
    case '/identity/verify':
      return {
        url: 'https://oneapi.alibaba-inc.com/mock/boshit/risk-auth-mfa'
      };
    case '/identity/skip':
      return {
        url: 'https://oneapi.alibaba-inc.com/mock/boshit/risk-skip-bind-mfa'
      };
    case '/identity/send':
      return {
        url: 'https://oneapi.alibaba-inc.com/mock/boshit/risk-send-verify-code'
      };
    default:
      return undefined;
  }
}
