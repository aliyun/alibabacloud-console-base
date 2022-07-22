interface IWindow {
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

// WindVane 相关的 API 参考地址 http://h5.alibaba-inc.com/api/WindVane-API.html
export default (window as unknown as IWindow).lib?.windvane;