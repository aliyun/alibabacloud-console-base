import {
  IPayloadFastbuy
} from '../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../const';
import broadcastByConsoleBase from '../../util/boradcast-by-console-base';

/**
 * Fastbuy 创建订单
 */
export default function fastbuySubmitPayment(payload: IPayloadFastbuy): void {
  broadcastByConsoleBase<IPayloadFastbuy>(EMessageBroadcastByConsoleBase.FASTBUY_SUBMIT_PAYMENT, payload);
}
