import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadRegionGroup
} from '../../../types';

/**
 * console-base 响应设置地域分组列表
 */
export default function onSetRegionGroups(fn: (payload: IPayloadRegionGroup[]) => void): () => void {
  return subscribeByConsoleBase<IPayloadRegionGroup[]>(EMessageBroadcastByApp.REGION_SET_REGION_GROUPS, fn);
}
