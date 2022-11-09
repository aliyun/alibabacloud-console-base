import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_REGION_TOGGLE_GLOBAL
} from '../const';

/**
 * console-base 响应启用地域「全球」模式
 */
export default function onToggleRegionGlobal(fn: (payload: boolean) => void): () => void {
  return subscribeByConsoleBase<boolean>(MESSAGE_TYPE_REGION_TOGGLE_GLOBAL, fn);
}
