import {
  EToolkitTypeShort
} from '../enum';

import composeToolkitType from './compose-toolkit-type';

/**
 * 跟工具相关的事件名称
 * 
 * TODO 这个真没有设计好.. 还不如把 id 放 payload
 */
export default function composeToolkitTypeWithId(type: EToolkitTypeShort, toolId: string): string {
  return `${composeToolkitType(type)}@${toolId}`;
}
