import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadTutorDismiss
} from '../../../types';

export default function onTutorDismiss(fn: (id: string, done: boolean) => void): () => void {
  return subscribeByApp<IPayloadTutorDismiss>(EMessageBroadcastByConsoleBase.TUTOR_DISMISS, payload => {
    if (!payload) {
      return;
    }
    
    fn(payload.id, payload.done);
  });
}
