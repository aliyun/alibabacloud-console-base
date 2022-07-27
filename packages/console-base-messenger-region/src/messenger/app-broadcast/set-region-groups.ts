import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadRegionGroup
} from '../../types';
import {
  MESSAGE_TYPE_REGION_SET_REGION_GROUPS
} from '../../const';

/**
 * 动态修改可用地域分组列表
 * 
 * @deprecated
 */
export default function setRegions(payload: IPayloadRegionGroup[]): void {
  broadcastByApp<IPayloadRegionGroup[]>(MESSAGE_TYPE_REGION_SET_REGION_GROUPS, payload);
}
