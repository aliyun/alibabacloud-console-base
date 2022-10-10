import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadTutorOpen
} from '../types';
import {
  MESSAGE_TYPE_TUTOR_OPEN
} from '../const';

export default function onOpenTutor(fn: (payload: IPayloadTutorOpen) => void): () => void {
  return subscribeByConsoleBase<IPayloadTutorOpen>(MESSAGE_TYPE_TUTOR_OPEN, fn);
}
