import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadMicroPrefUpdated
} from '../../../types';
import {
  broadcastByConsoleBase
} from '../../../util';

/**
 * 通知控制台应用：用户偏好有更新
 */
export default function microPrefUpdated<T>(key: string, value: T, valueOld: T): void {
  broadcastByConsoleBase<IPayloadMicroPrefUpdated<T>>(EMessageBroadcastByConsoleBase.MICRO_PREF_UPDATED, {
    key,
    value,
    valueOld
  });
}
