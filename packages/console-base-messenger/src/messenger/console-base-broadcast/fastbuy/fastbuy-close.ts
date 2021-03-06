import {
  IPayloadFastbuy
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import broadcastByConsoleBase from '../../../util/boradcast-by-console-base';

/**
 * Fastbuy 弹窗关闭
 */
export default function fastbuyClose(payload: IPayloadFastbuy): void {
  broadcastByConsoleBase<IPayloadFastbuy>(EMessageBroadcastByConsoleBase.FASTBUY_CLOSE, payload);
}
