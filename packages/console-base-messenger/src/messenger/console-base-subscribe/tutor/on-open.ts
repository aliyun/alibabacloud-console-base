import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadTutorOpen
} from '../../../types';

export default function onOpenTutor(fn: (payload: IPayloadTutorOpen) => void): () => void {
  return subscribeByConsoleBase<IPayloadTutorOpen>(EMessageBroadcastByApp.TUTOR_OPEN, fn);
}
