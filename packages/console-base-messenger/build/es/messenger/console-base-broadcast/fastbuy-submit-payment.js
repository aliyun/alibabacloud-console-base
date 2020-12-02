import { EMessageBroadcastByConsoleBase } from '../../const';
import broadcastByConsoleBase from '../../util/boradcast-by-console-base';
/**
 * Fastbuy 创建订单
 */

export default function fastbuySubmitPayment(payload) {
  broadcastByConsoleBase(EMessageBroadcastByConsoleBase.FASTBUY_SUBMIT_PAYMENT, payload);
}