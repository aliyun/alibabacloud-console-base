import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_TUTOR_ACTION
} from '../const';
import {
  IPayloadTutorClick
} from '../types';

/**
 * 微教程内部元素 :tutor-action[label]{value=xx} 点击后的事件注册
 */
export default function onTutorAction(fn: (id: string, value: string) => void): () => void {
  return subscribeByApp<IPayloadTutorClick>(MESSAGE_TYPE_TUTOR_ACTION, payload => {
    if (!payload) {
      return;
    }
    
    fn(payload.id, payload.value);
  });
}
