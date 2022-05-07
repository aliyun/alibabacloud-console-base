import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadRegionGroup
} from '../../../types';

/**
 * 动态修改可用地域分组列表
 * 
 * @deprecated
 */
export default function setRegions(payload: IPayloadRegionGroup[]): void {
  broadcastByApp<IPayloadRegionGroup[]>(EMessageBroadcastByApp.REGION_SET_REGION_GROUPS, payload);
}
