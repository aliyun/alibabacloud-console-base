import {
  EToolkitTypeShort
} from '../enum';

/**
 * 全局事件
 */
export default function composeToolkitType(type: EToolkitTypeShort): string {
  return `@ali/widget-console-base-toolkit/${type}`; // 不要随意改它，因为这个包可能会被别人引用
}

/**
 * 跟工具相关的事件名称
 * 
 * TODO 这个真没有设计好.. 还不如把 id 放 payload
 */
export function composeToolkitTypeWithId(type: EToolkitTypeShort, toolId: string): string {
  return `${composeToolkitType(type)}@${toolId}`;
}
