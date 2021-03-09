import {
  IPayloadTutorDismiss
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import subscribeByApp from '../../../util/subscribe-by-app';

export default function onTutorDismiss(fn: (payload: IPayloadTutorDismiss) => void): () => void {
  return subscribeByApp<IPayloadTutorDismiss>(EMessageBroadcastByConsoleBase.TUTOR_DISMISS, fn);
}
