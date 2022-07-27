import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_REGION_SET_ID
} from '../../const';

/**
 * console-base 响应设置地域 ID
 */
export default function onSetRegionId(fn: (payload: string) => void): () => void {
  return subscribeByConsoleBase<string>(MESSAGE_TYPE_REGION_SET_ID, fn);
}
