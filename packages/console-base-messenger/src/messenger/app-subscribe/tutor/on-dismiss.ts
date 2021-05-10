import {
  IPayloadTutorDismiss
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import subscribeByApp from '../../../util/subscribe-by-app';

export default function onTutorDismiss(fn: (id: string, done: boolean) => void): () => void {
  return subscribeByApp<IPayloadTutorDismiss>(EMessageBroadcastByConsoleBase.TUTOR_DISMISS, payload => {
    if (!payload) {
      return;
    }
    
    fn(payload.id, payload.done);
  });
}
