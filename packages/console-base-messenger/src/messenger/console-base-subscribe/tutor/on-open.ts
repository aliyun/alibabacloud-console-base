import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadTutorOpen
} from '../../../types';
import {
  subscribeByConsoleBase
} from '../../../util';

export default function onOpenTutor(fn: (payload: IPayloadTutorOpen) => void): () => void {
  return subscribeByConsoleBase<IPayloadTutorOpen>(EMessageBroadcastByApp.TUTOR_OPEN, fn);
}
