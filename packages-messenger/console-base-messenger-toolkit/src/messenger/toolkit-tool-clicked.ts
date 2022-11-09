import {
  broadcastByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EToolkitTypeShort
} from '../enum';
import {
  composeToolkitTypeWithId
} from '../util';

/**
 * 通知控制台应用：某工具被点击
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.broadcastClicked
 */
export default function toolkitToolClicked(id: string): void {
  broadcastByConsoleBase(composeToolkitTypeWithId(EToolkitTypeShort.TOOL_CLICKED, id));
}
