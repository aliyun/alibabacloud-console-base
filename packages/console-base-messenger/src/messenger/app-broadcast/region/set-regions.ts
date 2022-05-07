import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadRegion
} from '../../../types';

/**
 * 动态修改可用地域列表
 * 
 * @deprecated
 */
export default function setRegions(payload: IPayloadRegion[]): void {
  broadcastByApp<IPayloadRegion[]>(EMessageBroadcastByApp.REGION_SET_REGIONS, payload);
}
