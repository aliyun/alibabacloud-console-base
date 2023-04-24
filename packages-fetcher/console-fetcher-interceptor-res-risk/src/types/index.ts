import type {
  RiskConfig
} from '@alicloud/console-fetcher-risk-prompt';

export interface IFetcherInterceptorConfig extends RiskConfig {
  // 风控错误码
  codeNeedVerify?: string; // 风控 - 需要用验证码进行二次验证
  codeForbidden?: string; // 风控 - 中断业务流程
  codeInvalidInput?: string; // // 验证码错误
}