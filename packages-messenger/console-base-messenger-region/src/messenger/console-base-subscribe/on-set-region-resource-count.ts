import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadRegionResourceCount
} from '../../types';
import {
  MESSAGE_TYPE_REGION_SET_RESOURCE_COUNT
} from '../../const';

/**
 * console-base 响应设置地域资源数
 */
export default function onSetRegionResourceCount(fn: (payload: IPayloadRegionResourceCount) => void): () => void {
  return subscribeByConsoleBase<IPayloadRegionResourceCount>(MESSAGE_TYPE_REGION_SET_RESOURCE_COUNT, fn);
}
