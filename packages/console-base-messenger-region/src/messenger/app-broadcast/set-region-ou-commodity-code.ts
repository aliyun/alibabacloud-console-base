import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_REGION_SET_OU_COMMODITY_CODE
} from '../../const';

export default function setRegionOuCommodityCode(payload: string): void {
  broadcastByApp<string>(MESSAGE_TYPE_REGION_SET_OU_COMMODITY_CODE, payload);
}
