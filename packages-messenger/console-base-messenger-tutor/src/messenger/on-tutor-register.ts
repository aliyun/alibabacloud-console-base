import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadTutorRegister
} from '../types';
import {
  MESSAGE_TYPE_TUTOR_REGISTER
} from '../const';

export default function onRegisterTutor(fn: (payload: IPayloadTutorRegister) => void): () => void {
  return subscribeByConsoleBase<IPayloadTutorRegister>(MESSAGE_TYPE_TUTOR_REGISTER, fn);
}
