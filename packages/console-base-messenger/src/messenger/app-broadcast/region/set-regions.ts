import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadRegion
} from '../../../types';
import {
  broadcastByApp
} from '../../../util';

/**
 * 动态修改可用地域列表
 * 
 * @deprecated
 */
export default function setRegions(payload: IPayloadRegion[]): void {
  broadcastByApp<IPayloadRegion[]>(EMessageBroadcastByApp.REGION_SET_REGIONS, payload);
}
