import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

export default function setRegionOuCommodityCode(payload: string): void {
  broadcastByApp<string>(EMessageBroadcastByApp.REGION_SET_OU_COMMODITY_CODE, payload);
}
