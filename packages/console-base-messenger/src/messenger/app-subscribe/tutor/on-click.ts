import {
  IPayloadTutorClick
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import subscribeByApp from '../../../util/subscribe-by-app';

export default function onTutorClick(fn: (payload: IPayloadTutorClick) => void): () => void {
  return subscribeByApp<IPayloadTutorClick>(EMessageBroadcastByConsoleBase.TUTOR_CLICK, fn);
}
