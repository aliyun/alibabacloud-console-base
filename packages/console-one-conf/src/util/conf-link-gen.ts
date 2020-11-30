import ONE_CONF from '@alicloud/console-one-config';

import {
  IFnConfLink,
  TInterpolation
} from '../types';

type TInterpolationMode = '[]' | '{}' | '${}' | '{{}}' | '<>';

/**
 * 渠道链接中的替换符，各个控制台的偏好不一样...但一个控制台下应该保持一致
 */
function getInterpolationReg(interpolationMode: TInterpolationMode): RegExp {
  switch (interpolationMode) {
    case '{}':
      return /\\?{([^{}]+)}/g;
    case '${}':
      return /\\?\${([^{}]+)}/g;
    case '{{}}':
      return /\\?{{([^{}]+)}}/g;
    case '<>':
      return /\\?<([^<>]+)>/g;
    default:
      return /\\?\[([^[\]]+)]/g;
  }
}

/**
 * 渠道链接工厂方法，要求必须传入所有兜底的渠道链接（在 TS 下有良好的 key 约束）
 */
export default function confLinkGen<T>(defaultLinks: T, interpolationMode: TInterpolationMode = '[]'): [IFnConfLink<keyof typeof defaultLinks>, T] {
  const LINK: T = {
    ...defaultLinks,
    ...ONE_CONF.LINK
  };
  const REG_INTERPOLATION = getInterpolationReg(interpolationMode);
  
  /**
   * 获取配置的链接，注意 interpolation 中的参数是不进行 encodeURIComponent 操作的，如有需要需自行处理
   */
  return [function confLink(key: keyof typeof defaultLinks, interpolation?: TInterpolation, noEncode?: boolean): string {
    const link = LINK[key];
    
    if (!link || typeof link !== 'string') {
      return key as string || '';
    }
    
    if (!interpolation) {
      return link;
    }
    
    // 如果连接当中有类似 `[xx]` 的地方需要将其用 `interpolation.xx` 来替换
    return link.replace(REG_INTERPOLATION, (match: string, name: string): string => {
      if (match.charAt(0) === '\\') {
        return match.slice(1);
      }
      
      const str: string = interpolation[name] === undefined ? '' : String(interpolation[name]);
      
      return noEncode ? str : encodeURIComponent(str);
    });
  }, LINK];
}
