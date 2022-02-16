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
 * Fastbuy 开始购买
 */
export default function fastbuyBuy(payload: IPayloadFastbuy): void {
  broadcastByConsoleBase<IPayloadFastbuy>(EMessageBroadcastByConsoleBase.FASTBUY_BUY, payload);
}
