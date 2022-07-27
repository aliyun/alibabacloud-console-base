import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_REGION_SET_OU_COMMODITY_CODE
} from '../../const';

export default function onSetRegionOuCommodityCode(fn: (commodityCode: string) => void): () => void {
  return subscribeByConsoleBase<string>(MESSAGE_TYPE_REGION_SET_OU_COMMODITY_CODE, payload => {
    fn(payload || '');
  });
}
