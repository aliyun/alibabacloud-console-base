import {
  IPayloadTutorStepChange
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import subscribeByApp from '../../../util/subscribe-by-app';

export default function onTutorStepChange(fn: (payload: IPayloadTutorStepChange) => void): () => void {
  return subscribeByApp<IPayloadTutorStepChange>(EMessageBroadcastByConsoleBase.TUTOR_STEP_CHANGE, fn);
}
