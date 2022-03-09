export interface IConsoleBase {
  /**
   * 只给控制台应用使用，通过 window 来间接访问；也可以通过在进行线上调试
   */
  forApp: Record<string, unknown>;
  /**
   * 代理 error-prompt
   */
  PROXY_ERROR_PROMPT: boolean;
  /**
   * 代理 fetcher
   */
  PROXY_FETCHER: boolean;
  /**
   * 针对一个控制台应用上有多个控制台产品的场景，需要应用适时告知，之所以放在 global 里是因为这样的话，SLS 等处还是可以直接获取，
   * 而不需要经过顶层 context 逐层下放造成使用上的困扰
   */
  PRODUCT_ID: string;
}

export interface IWindowWithConsoleBase extends Window {
  ConsoleBase?: IConsoleBase; // 这个全局变量的名字不要轻易变，因为它会被应用直接使用（应用不会通过这个包）
}