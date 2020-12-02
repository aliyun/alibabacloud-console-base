import { EMessageBroadcastByConsoleBase } from '../../const';
import broadcastByConsoleBase from '../../util/boradcast-by-console-base';
/**
 * Fastbuy 开始购买
 */

export default function fastbuyBuy(payload) {
  broadcastByConsoleBase(EMessageBroadcastByConsoleBase.FASTBUY_BUY, payload);
}