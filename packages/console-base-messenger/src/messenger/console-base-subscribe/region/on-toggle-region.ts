import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

/**
 * console-base 响应隐藏/展示地域选择器
 */
export default function onToggleRegion(fn: (payload: boolean) => void): () => void {
  return subscribeByConsoleBase<boolean>(EMessageBroadcastByApp.REGION_TOGGLE, fn);
}
