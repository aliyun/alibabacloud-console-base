import {
  broadcastByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EToolkitTypeShort
} from '../../enum';
import {
  composeToolkitTypeWithId
} from '../../util';

/**
 * 通知控制台应用：某工具的 Tooltip 被关闭
 */
export default function toolkitTooltipClose(id: string): void {
  broadcastByConsoleBase(composeToolkitTypeWithId(EToolkitTypeShort.TOOL_TOOLTIP_CLOSE, id));
}
