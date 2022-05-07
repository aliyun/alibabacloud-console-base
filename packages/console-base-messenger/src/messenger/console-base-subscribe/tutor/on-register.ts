import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadTutorRegister
} from '../../../types';

export default function onRegisterTutor(fn: (payload: IPayloadTutorRegister) => void): () => void {
  return subscribeByConsoleBase<IPayloadTutorRegister>(EMessageBroadcastByApp.TUTOR_REGISTER, fn);
}
