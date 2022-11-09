import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_REGION_TOGGLE
} from '../const';

/**
 * console-base 响应隐藏/展示地域选择器
 */
export default function onToggleRegion(fn: (payload: boolean) => void): () => void {
  return subscribeByConsoleBase<boolean>(MESSAGE_TYPE_REGION_TOGGLE, fn);
}
