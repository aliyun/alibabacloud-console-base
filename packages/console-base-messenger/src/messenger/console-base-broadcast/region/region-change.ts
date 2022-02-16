import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadRegionOnChange
} from '../../../types';
import {
  broadcastByConsoleBase
} from '../../../util';

/**
 * 通知控制台应用：用户选择新的区域
 */
export default function regionChange(payload: IPayloadRegionOnChange): void {
  broadcastByConsoleBase<IPayloadRegionOnChange>(EMessageBroadcastByConsoleBase.REGION_CHANGE, payload);
}
