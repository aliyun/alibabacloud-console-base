import {
  IPayloadRegionOnChange
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import broadcastByConsoleBase from '../../../util/broadcast-by-console-base';

/**
 * 通知控制台应用：用户选择新的区域
 */
export default function regionChange(payload: IPayloadRegionOnChange): void {
  broadcastByConsoleBase<IPayloadRegionOnChange>(EMessageBroadcastByConsoleBase.REGION_CHANGE, payload);
}
