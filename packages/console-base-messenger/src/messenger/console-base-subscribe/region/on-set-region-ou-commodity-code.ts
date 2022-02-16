import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  subscribeByConsoleBase
} from '../../../util';

export default function onSetRegionOuCommodityCode(fn: (commodityCode: string) => void): () => void {
  return subscribeByConsoleBase<string>(EMessageBroadcastByApp.REGION_SET_OU_COMMODITY_CODE, payload => {
    fn(payload || '');
  });
}
