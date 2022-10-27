import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_RESOURCE_GROUP_TOGGLE
} from '../const';

/**
 * console-base 响应隐藏/展示资源组选择器
 */
export default function onToggleResourceGroup(fn: (payload: boolean) => void): () => void {
  return subscribeByConsoleBase<boolean>(MESSAGE_TYPE_RESOURCE_GROUP_TOGGLE, fn);
}
