import {
  IDemoConfig
} from '../types';

const MOCK_PREFIX = 'https://oneapi.alibaba-inc.com/mock/boshit';

/**
 * 这个拦截器用于将 Mock 内置流程（风控、Safeguard 等）的相对 URL，利用 OneAPI 进行本地测试
 * 
 * 使用 `fetcher.interceptRequest(fetcherDemoInterceptorMockSystemUrls)`
 */
export default function fetcherDemoInterceptorMockSystemUrls(config: IDemoConfig): Partial<IDemoConfig> | undefined {
  switch (config.url) {
    // 风控（标准版）
    case '/risk/sendVerifyMessage.json':
      return {
        url: `${MOCK_PREFIX}/risk-send-code`
      };
    // 风控（新版）
    case '/identity/getMfaInfoToBind':
      return {
        url: `${MOCK_PREFIX}/risk-get-mfa-info-to-bind`
      };
    case '/identity/getMfaInfoToAuth':
      return {
        url: `${MOCK_PREFIX}/risk-get-mfa-info-to-auth`
      };
    case '/identity/getMfaInfoToAuthV2':
      return {
        url: `${MOCK_PREFIX}/risk-get-mfa-info-to-auth-v2`
      };
    case '/identity/bindMFA':
      return {
        url: `${MOCK_PREFIX}/risk-bind-mfa`
      };
    case '/identity/verify':
      return {
        url: `${MOCK_PREFIX}/risk-auth-mfa`
      };
    case '/identity/skip':
      return {
        url: `${MOCK_PREFIX}/risk-skip-bind-mfa`
      };
    case '/identity/send':
      return {
        url: `${MOCK_PREFIX}/risk-send-verify-code`
      };
    // Safeguard（内部版）
    case '/safeguard/order/create':
      return {
        url: `${MOCK_PREFIX}/safeguard/order/create`
      };
    case '/safeguard/order/get':
      return {
        url: `${MOCK_PREFIX}/safeguard/order/get`
      };
    default:
      return undefined;
  }
}
