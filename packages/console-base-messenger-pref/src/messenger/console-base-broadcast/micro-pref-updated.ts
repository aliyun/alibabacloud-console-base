import {
  broadcastByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadMicroPrefUpdated
} from '../../types';
import {
  MESSAGE_TYPE_MICRO_PREF_UPDATED
} from '../../const';

/**
 * 通知控制台应用：用户偏好有更新
 */
export default function microPrefUpdated<T>(key: string, value: T): void {
  broadcastByConsoleBase<IPayloadMicroPrefUpdated<T>>(MESSAGE_TYPE_MICRO_PREF_UPDATED, {
    key,
    value
  });
}
