import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadFastbuy
} from '../../../types';
import {
  subscribeByApp
} from '../../../util';

export default function onFastbuyOrderFinish(fn: (payload: IPayloadFastbuy) => void): () => void {
  return subscribeByApp<IPayloadFastbuy>(EMessageBroadcastByConsoleBase.FASTBUY_ORDER_FINISH, fn);
}
