import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadTutorDismiss
} from '../../../types';
import {
  subscribeByApp
} from '../../../util';

export default function onTutorDismiss(fn: (id: string, done: boolean) => void): () => void {
  return subscribeByApp<IPayloadTutorDismiss>(EMessageBroadcastByConsoleBase.TUTOR_DISMISS, payload => {
    if (!payload) {
      return;
    }
    
    fn(payload.id, payload.done);
  });
}
