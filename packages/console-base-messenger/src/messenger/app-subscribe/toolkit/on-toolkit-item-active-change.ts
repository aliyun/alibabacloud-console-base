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
 * 某工具的「激活」时的回调
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.subscribeActivated + subscribeDeactivated
 */
export default function onToolkitItemActiveChange(id: string, fn: (active: boolean) => void): () => void {
  return subscribeByApp(composeToolkitTypeWithId(EToolkitTypeShort.TOOL_ACTIVATED, id), fn);
}
