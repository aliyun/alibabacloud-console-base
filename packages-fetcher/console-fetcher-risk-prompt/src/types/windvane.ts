/**
 * windvane 抛的错不是 Error 实例
 */
export interface IWindvaneError0 {
  ret: string; // 可认为是错误码，一般以 `HY_` 打头，见 const 中 WINDVANE_ERROR_CODE
  message?: string;
}

/**
 * 经过转化的 windvane 的错误，错误 name 是 WindvaneError
 */
export interface IWindvaneError extends Error {
  code: string;
}