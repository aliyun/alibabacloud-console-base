import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_RESOURCE_GROUP_SET_RESOURCE_COUNT
} from '../../const';

/**
 * console-base 响应设置当前选中的资源组
 */
export default function onSetResourceGroupResourceCount(fn: (payload: Record<string, number>) => void): () => void {
  return subscribeByConsoleBase<Record<string, number>>(MESSAGE_TYPE_RESOURCE_GROUP_SET_RESOURCE_COUNT, fn);
}
