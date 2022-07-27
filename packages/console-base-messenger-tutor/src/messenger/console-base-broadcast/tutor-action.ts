import {
  broadcastByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadTutorClick
} from '../../types';
import {
  MESSAGE_TYPE_TUTOR_ACTION
} from '../../const';

/**
 * 微教程内部元素 :tutor-action[label]{value=xx} 点击后需要通知应用
 */
export default function tutorAction(id: string, value: string): void {
  broadcastByConsoleBase<IPayloadTutorClick>(MESSAGE_TYPE_TUTOR_ACTION, {
    id,
    value
  });
}
