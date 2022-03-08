import {
  EToolkitTypeShort
} from '../../../enum';
import {
  composeToolkitType,
  broadcastByConsoleBase
} from '../../../util';

/**
 * 通知控制台应用：某工具的 Tooltip 被关闭
 */
export default function toolkitTooltipClose(id: string): void {
  broadcastByConsoleBase(composeToolkitType(EToolkitTypeShort.TOOL_TOOLTIP_CLOSE), id);
}
