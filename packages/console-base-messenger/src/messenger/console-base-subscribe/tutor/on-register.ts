import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadTutorRegister
} from '../../../types';
import {
  subscribeByConsoleBase
} from '../../../util';

export default function onRegisterTutor(fn: (payload: IPayloadTutorRegister) => void): () => void {
  return subscribeByConsoleBase<IPayloadTutorRegister>(EMessageBroadcastByApp.TUTOR_REGISTER, fn);
}
