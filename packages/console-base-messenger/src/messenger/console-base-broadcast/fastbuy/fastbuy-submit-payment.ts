import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadFastbuy
} from '../../../types';
import {
  broadcastByConsoleBase
} from '../../../util';

/**
 * Fastbuy 创建订单
 */
export default function fastbuySubmitPayment(payload: IPayloadFastbuy): void {
  broadcastByConsoleBase<IPayloadFastbuy>(EMessageBroadcastByConsoleBase.FASTBUY_SUBMIT_PAYMENT, payload);
}
