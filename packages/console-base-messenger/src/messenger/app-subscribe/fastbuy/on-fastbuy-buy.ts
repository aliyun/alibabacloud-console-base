import {
  IPayloadFastbuy
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import subscribeByApp from '../../../util/subscribe-by-app';

export default function onFastbuyBuy(fn: (payload: IPayloadFastbuy) => void): () => void {
  return subscribeByApp<IPayloadFastbuy>(EMessageBroadcastByConsoleBase.FASTBUY_BUY, fn);
}
