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
 * Fastbuy 完成支付
 */
export default function fastbuyOrderFinish(payload: IPayloadFastbuy): void {
  broadcastByConsoleBase<IPayloadFastbuy>(EMessageBroadcastByConsoleBase.FASTBUY_ORDER_FINISH, payload);
}
