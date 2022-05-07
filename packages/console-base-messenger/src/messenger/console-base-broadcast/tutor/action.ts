import {
  broadcastByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadTutorClick
} from '../../../types';

/**
 * 微教程内部元素 :tutor-action[label]{value=xx} 点击后需要通知应用
 */
export default function tutorAction(id: string, value: string): void {
  broadcastByConsoleBase<IPayloadTutorClick>(EMessageBroadcastByConsoleBase.TUTOR_ACTION, {
    id,
    value
  });
}
