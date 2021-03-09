import {
  IPayloadTutorOpen
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import subscribeByConsoleBase from '../../../util/subscribe-by-console-base';

export default function onOpenTutor<P = IPayloadTutorOpen>(fn: (payload: P) => void): () => void {
  return subscribeByConsoleBase<P>(EMessageBroadcastByApp.TUTOR_OPEN, fn);
}
