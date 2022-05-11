import {
  EToolkitTypeShort
} from '../enum';

/**
 * 全局事件
 */
export default function composeToolkitType(type: EToolkitTypeShort): string {
  return `@ali/widget-console-base-toolkit/${type}`; // 不要随意改它，因为这个包可能会被别人引用
}