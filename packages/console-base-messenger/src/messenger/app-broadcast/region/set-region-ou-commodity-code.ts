import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  broadcastByApp
} from '../../../util';

export default function setRegionOuCommodityCode(payload: string): void {
  broadcastByApp<string>(EMessageBroadcastByApp.REGION_SET_OU_COMMODITY_CODE, payload);
}
