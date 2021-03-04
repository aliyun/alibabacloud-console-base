import {
  IPayloadFastbuy
} from '../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../const';
import subscribeByApp from '../../util/subscribe-by-app';

export default function onFastbuyClose(fn: (payload: IPayloadFastbuy) => void): () => void {
  return subscribeByApp<IPayloadFastbuy>(EMessageBroadcastByConsoleBase.FASTBUY_CLOSE, fn);
}
