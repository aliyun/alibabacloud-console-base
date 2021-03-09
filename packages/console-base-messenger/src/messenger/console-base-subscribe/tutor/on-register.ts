import {
  IPayloadTutorRegister
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import subscribeByConsoleBase from '../../../util/subscribe-by-console-base';

export default function onRegisterTutor<P = IPayloadTutorRegister>(fn: (payload: P) => void): () => void {
  return subscribeByConsoleBase<P>(EMessageBroadcastByApp.TUTOR_REGISTER, fn);
}
