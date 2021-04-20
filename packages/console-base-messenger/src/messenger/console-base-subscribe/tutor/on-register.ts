import {
  IPayloadTutorRegister
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import subscribeByConsoleBase from '../../../util/subscribe-by-console-base';

export default function onRegisterTutor(fn: (payload: IPayloadTutorRegister) => void): () => void {
  return subscribeByConsoleBase<IPayloadTutorRegister>(EMessageBroadcastByApp.TUTOR_REGISTER, fn);
}
