import {
  IPayloadRegion
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  broadcastByApp
} from '../../../util';

/**
 * 动态修改可用地域列表
 */
export default function setRegions(payload: IPayloadRegion[]): void {
  broadcastByApp<IPayloadRegion[]>(EMessageBroadcastByApp.REGION_SET_REGIONS, payload);
}
