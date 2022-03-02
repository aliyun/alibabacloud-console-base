import {
  IWindow
} from '../types';

/**
 * 获取 umid 参数，控制台下通用
 */
export default function getUmid(): string | undefined {
  try {
    const umidFromGetToken = (window as IWindow)?.um?.getToken(); // getToken 方法在绑定 g.alicdn.com 的 host 时不存在
    const umidFromRiskInfo = (window as IWindow)?.RISK_INFO?.UMID;

    return umidFromGetToken || umidFromRiskInfo; // 优先取 getToken 的结果，理论上 umidFromGetToken 和 umidFromRiskInfo 的值是一样的
  } catch (err) {
    return undefined;
  }
}
