import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadFastbuy
} from '../../../types';
import {
  subscribeByApp
} from '../../../util';

export default function onFastbuySubmitPayment(fn: (payload: IPayloadFastbuy) => void): () => void {
  return subscribeByApp<IPayloadFastbuy>(EMessageBroadcastByConsoleBase.FASTBUY_SUBMIT_PAYMENT, fn);
}
