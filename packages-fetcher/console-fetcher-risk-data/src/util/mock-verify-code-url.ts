interface IDemoConfig {
  url?: string;
  method?: string;
  timeout?: number;
}

/**
 * 这个拦截器用于模拟本地开发中获取验证码
 * 如果引入 @alicloud/fetcher-demo-helpers 中的 fetcherDemoInterceptorMockVerifyCodeUrl 函数的话，还需要在这个包里面引入 storybook 作为 dependency...不值得
 * 
 * 使用 `fetcher.interceptRequest(fetcherInterceptorMockVerifyCodeUrl)`
 */
export default function fetcherInterceptorMockVerifyCodeUrl(config: IDemoConfig): Partial<IDemoConfig> | undefined {
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
    case '/identity/getMfaInfoToAuthV2':
      return {
        url: 'https://oneapi.alibaba-inc.com/mock/boshit/risk-get-mfa-info-to-auth-v2'
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
