import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadTutorDismiss
} from '../types';
import {
  MESSAGE_TYPE_TUTOR_DISMISS
} from '../const';

export default function onTutorDismiss(fn: (id: string, done: boolean) => void): () => void {
  return subscribeByApp<IPayloadTutorDismiss>(MESSAGE_TYPE_TUTOR_DISMISS, payload => {
    if (!payload) {
      return;
    }
    
    fn(payload.id, payload.done);
  });
}
