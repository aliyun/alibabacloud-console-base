import { IFnConfLink } from '../types';
declare type TInterpolationMode = '[]' | '{}' | '${}' | '{{}}' | '<>';
/**
 * 渠道链接工厂方法，要求必须传入所有兜底的渠道链接（在 TS 下有良好的 key 约束）
 */
export default function confLinkGen<T>(defaultLinks: T, interpolationMode?: TInterpolationMode): [IFnConfLink<keyof typeof defaultLinks>, T];
export {};
