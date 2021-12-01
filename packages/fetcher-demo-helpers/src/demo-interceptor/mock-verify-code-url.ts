import {
  IDemoConfig
} from '../types';

/**
 * 这个拦截器用于模拟 demo 中获取验证码
 * 
 * 使用 `fetcher.interceptRequest(fetcherDemoInterceptorMockVerifyCodeUrl)`
 */
export default function fetcherDemoInterceptorMockVerifyCodeUrl(config: IDemoConfig): Partial<IDemoConfig> | undefined {
  if (config.url === '/risk/sendVerifyMessage.json') {
    return {
      url: 'https://oneapi.alibaba-inc.com/mock/boshit/risk-send-code'
    };
  }

  if (config.url === '/identity/getMfaInfoToBind') {
    return {
      url: 'https://oneapi.alibaba-inc.com/mock/boshit/risk-get-mfa-info-to-bind'
    };
  }

  if (config.url === '/identity/getMfaInfoToAuth') {
    return {
      url: 'https://oneapi.alibaba-inc.com/mock/boshit/risk-get-mfa-info-to-auth'
    };
  }

  if (config.url === '/identity/bindMFA') {
    return {
      url: 'https://oneapi.alibaba-inc.com/mock/boshit/risk-bind-mfa'
    };
  }

  if (config.url === '/identity/verify') {
    return {
      url: 'https://oneapi.alibaba-inc.com/mock/boshit/risk-auth-mfa'
    };
  }

  if (config.url === '/identity/skip') {
    return {
      url: 'https://oneapi.alibaba-inc.com/mock/boshit/risk-skip-bind-mfa'
    };
  }
}
