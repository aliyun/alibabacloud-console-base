import { EMessageBroadcastByConsoleBase } from '../../const';
import broadcastByConsoleBase from '../../util/boradcast-by-console-base';
/**
 * Fastbuy 完成支付
 */

export default function fastbuyOrderFinish(payload) {
  broadcastByConsoleBase(EMessageBroadcastByConsoleBase.FASTBUY_ORDER_FINISH, payload);
}