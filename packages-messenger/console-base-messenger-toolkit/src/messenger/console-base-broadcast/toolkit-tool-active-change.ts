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
 * 通知控制台应用：某工具被激活或取消激活
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.broadcastActivated + broadcastDeactivated
 */
export default function toolkitToolActiveChanged(id: string, payload: boolean): void {
  broadcastByConsoleBase(composeToolkitTypeWithId(EToolkitTypeShort.TOOL_ACTIVATED, id), payload);
}
