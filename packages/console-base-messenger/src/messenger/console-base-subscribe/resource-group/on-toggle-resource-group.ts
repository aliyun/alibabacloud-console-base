import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

/**
 * console-base 响应隐藏/展示资源组选择器
 */
export default function onToggleResourceGroup(fn: (payload: boolean) => void): () => void {
  return subscribeByConsoleBase<boolean>(EMessageBroadcastByApp.RESOURCE_GROUP_TOGGLE, fn);
}
