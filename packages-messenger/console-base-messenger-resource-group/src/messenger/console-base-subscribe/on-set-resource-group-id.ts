import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_RESOURCE_GROUP_SET_ID
} from '../../const';

/**
 * console-base 响应设置当前选中的资源组
 */
export default function onSetResourceGroupId(fn: (payload: string) => void): () => void {
  return subscribeByConsoleBase<string>(MESSAGE_TYPE_RESOURCE_GROUP_SET_ID, fn);
}
