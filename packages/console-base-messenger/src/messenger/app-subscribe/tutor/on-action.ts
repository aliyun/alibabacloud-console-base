import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadTutorClick
} from '../../../types';

/**
 * 微教程内部元素 :tutor-action[label]{value=xx} 点击后的事件注册
 */
export default function onTutorAction(fn: (id: string, value: string) => void): () => void {
  return subscribeByApp<IPayloadTutorClick>(EMessageBroadcastByConsoleBase.TUTOR_ACTION, payload => {
    if (!payload) {
      return;
    }
    
    fn(payload.id, payload.value);
  });
}
