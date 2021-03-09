import {
  IPayloadFastbuy
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import broadcastByConsoleBase from '../../../util/boradcast-by-console-base';

/**
 * Fastbuy 开始购买
 */
export default function fastbuyBuy(payload: IPayloadFastbuy): void {
  broadcastByConsoleBase<IPayloadFastbuy>(EMessageBroadcastByConsoleBase.FASTBUY_BUY, payload);
}
