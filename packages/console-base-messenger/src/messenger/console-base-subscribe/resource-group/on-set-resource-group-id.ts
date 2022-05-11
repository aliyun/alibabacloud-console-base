import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

/**
 * console-base 响应设置当前选中的资源组
 */
export default function onSetResourceGroupId(fn: (payload: string) => void): () => void {
  return subscribeByConsoleBase<string>(EMessageBroadcastByApp.RESOURCE_GROUP_SET_ID, fn);
}
