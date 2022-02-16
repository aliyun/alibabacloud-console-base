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
 * Fastbuy 弹窗关闭
 */
export default function fastbuyClose(payload: IPayloadFastbuy): void {
  broadcastByConsoleBase<IPayloadFastbuy>(EMessageBroadcastByConsoleBase.FASTBUY_CLOSE, payload);
}
