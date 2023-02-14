export interface IWindowWithWindvane {
  lib?: {
    windvane: {
      // version: string; // 包版本
      isAvailable: boolean; // 静态检查是否 WindVane 可用
      // isNewBridgeAvailable: boolean;
      call<T = void, P = void>(module: string, method: string, params?: P): Promise<T>; // 实际上它有 6 个参数...
      // call2(a, b, c, d, e);
      // find(a, b);
      // fireEvent(a, b, c);
      // getParam(a);
      // setData(a, b);
      // onFailure(a, b);
      // onSuccess(a, b, c);
    };
  };
}

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