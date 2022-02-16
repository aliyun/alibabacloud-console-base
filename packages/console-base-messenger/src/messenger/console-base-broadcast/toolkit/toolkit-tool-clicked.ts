import {
  EToolkitTypeShort
} from '../../../enum';
import {
  composeToolkitTypeWithId,
  broadcastByConsoleBase
} from '../../../util';

/**
 * 通知控制台应用：某工具被点击
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.broadcastClicked
 */
export default function toolkitToolClicked(id: string): void {
  broadcastByConsoleBase(composeToolkitTypeWithId(EToolkitTypeShort.TOOL_CLICKED, id));
}
