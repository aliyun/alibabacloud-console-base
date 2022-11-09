import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadRegionGroup
} from '../types';
import {
  MESSAGE_TYPE_REGION_SET_REGION_GROUPS
} from '../const';

/**
 * console-base 响应设置地域分组列表
 */
export default function onSetRegionGroups(fn: (payload: IPayloadRegionGroup[]) => void): () => void {
  return subscribeByConsoleBase<IPayloadRegionGroup[]>(MESSAGE_TYPE_REGION_SET_REGION_GROUPS, fn);
}
