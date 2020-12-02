import { EMessageBroadcastByConsoleBase } from '../../const';
import broadcastByConsoleBase from '../../util/boradcast-by-console-base';
/**
 * Fastbuy 弹窗关闭
 */

export default function fastbuyClose(payload) {
  broadcastByConsoleBase(EMessageBroadcastByConsoleBase.FASTBUY_CLOSE, payload);
}