interface ISystemParams {
    BROWSER: string;
    BROWSER_VERSION: string;
    OS: string;
    OS_VERSION: string;
    IN_IFRAME: boolean;
    TIME: number;
    REFERRER: string;
    LOCATION_HOST: string;
    LOCATION_PATHNAME: string;
    LOCATION_SEARCH: string;
    LOCATION_HASH: string;
}
/**
 * 获取系统参数（最基础的日志参数）
 */
export default function getSystemParams(): ISystemParams;
export {};
