import {
  EToolkitTypeShort
} from '../../../enum';
import {
  composeToolkitTypeWithId,
  broadcastByConsoleBase
} from '../../../util';

/**
 * 通知控制台应用：某工具的 Tooltip 被关闭
 */
export default function toolkitTooltipClose(id: string): void {
  broadcastByConsoleBase(composeToolkitTypeWithId(EToolkitTypeShort.TOOL_TOOLTIP_CLOSE, id));
}
