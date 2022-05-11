import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  EToolkitTypeShort
} from '../../../enum';
import {
  composeToolkitTypeWithId
} from '../../../util';

/**
 * 某工具的 Tooltip 被关闭，当设置工具的 tooltip.defaultVisible = true，要求加上 closable: true 并监听关闭（关闭后应该不再有 defaultVisible: true）
 */
export default function onToolkitTooltipClose(id: string, fn: () => void): () => void {
  return subscribeByApp(composeToolkitTypeWithId(EToolkitTypeShort.TOOL_TOOLTIP_CLOSE, id), fn);
}