import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadFastbuy
} from '../../../types';
import {
  subscribeByApp
} from '../../../util';

export default function onFastbuyBuy(fn: (payload: IPayloadFastbuy) => void): () => void {
  return subscribeByApp<IPayloadFastbuy>(EMessageBroadcastByConsoleBase.FASTBUY_BUY, fn);
}
