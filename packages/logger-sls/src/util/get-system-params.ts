import UA from '@alicloud/ua';

import {
  ISystemParams
} from '../types';

import getCleanLocationSearch from './get-clean-location-search';
import getResolutionOfScreen from './get-resolution-of-screen';
import getResolutionOfBrowser from './get-resolution-of-browser';
import getSpmA from './get-spm-a';
import getSpmB from './get-spm-b';

const IN_IFRAME: boolean = window !== window.top;

/**
 * 获取系统参数（最基础的日志参数）
 */
export default function getSystemParams(): ISystemParams {
  return {
    TIME: Date.now(), // 浏览器时间，日志其实有自己的时间 `__tag__:__receive_time__`，但它是秒，且它仅表示服务端接收到的时间
    OS: UA.OS,
    OS_VERSION: UA.OS_VERSION,
    BROWSER: UA.BROWSER,
    BROWSER_VERSION: UA.BROWSER_VERSION,
    LOCATION_HOST: window.location.host,
    LOCATION_PATHNAME: window.location.pathname,
    LOCATION_SEARCH: getCleanLocationSearch(),
    LOCATION_HASH: window.location.hash.substring(1),
    RESOLUTION_SCREEN: getResolutionOfScreen(),
    RESOLUTION_BROWSER: getResolutionOfBrowser(),
    SPM_A: getSpmA(),
    SPM_B: getSpmB(),
    IN_IFRAME,
    REFERRER: typeof document === 'undefined' ? 'SSR' : document.referrer
  };
}
