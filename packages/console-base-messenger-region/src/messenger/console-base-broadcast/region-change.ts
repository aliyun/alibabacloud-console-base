import {
  broadcastByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadRegionOnChange
} from '../../types';
import {
  MESSAGE_TYPE_REGION_CHANGE
} from '../../const';

/**
 * 通知控制台应用：用户选择新的区域
 */
export default function regionChange(payload: IPayloadRegionOnChange): void {
  broadcastByConsoleBase<IPayloadRegionOnChange>(MESSAGE_TYPE_REGION_CHANGE, payload);
}
