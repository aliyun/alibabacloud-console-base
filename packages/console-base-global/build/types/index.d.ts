/**
 * 这个包不会去设置全局变量，而是由 ConsoleBase 主体代码来设置
 */
export declare function setGlobalVar(): void;
/**
 * 设置是否开启错误提示代理
 */
export declare function setProxyErrorPrompt(yes?: boolean): void;
/**
 * 获取 window 下全局变量中的错误提示代理
 */
export declare function getProxyErrorPrompt(): boolean;
/**
 * 设置是否开启 fetcher 代理
 */
export declare function setProxyFetcher(yes?: boolean): void;
/**
 * 获取 window 下全局变量中的 fetcher 代理
 */
export declare function getProxyFetcher(): boolean;
