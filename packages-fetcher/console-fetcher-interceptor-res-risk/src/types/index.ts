export interface IFetcherInterceptorConfig {
  // 风控错误码
  CODE_NEED_VERIFY?: string; // 风控 - 需要用验证码进行二次验证
  CODE_FORBIDDEN?: string; // 风控 - 中断业务流程
  CODE_INVALID_INPUT?: string; // 验证码错误
}