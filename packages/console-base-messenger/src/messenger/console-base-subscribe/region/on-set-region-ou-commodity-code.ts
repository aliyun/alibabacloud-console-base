import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

export default function onSetRegionOuCommodityCode(fn: (commodityCode: string) => void): () => void {
  return subscribeByConsoleBase<string>(EMessageBroadcastByApp.REGION_SET_OU_COMMODITY_CODE, payload => {
    fn(payload || '');
  });
}
