import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadRegion
} from '../../types';
import {
  MESSAGE_TYPE_REGION_SET_REGIONS
} from '../../const';

/**
 * 动态修改可用地域列表
 * 
 * @deprecated
 */
export default function setRegions(payload: IPayloadRegion[]): void {
  broadcastByApp<IPayloadRegion[]>(MESSAGE_TYPE_REGION_SET_REGIONS, payload);
}
