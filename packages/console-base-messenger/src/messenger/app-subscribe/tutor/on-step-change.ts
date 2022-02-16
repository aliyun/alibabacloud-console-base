import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadTutorStepChange
} from '../../../types';
import {
  subscribeByApp
} from '../../../util';

export default function onTutorStepChange(fn: (id: string, to: number, from: number) => void): () => void {
  return subscribeByApp<IPayloadTutorStepChange>(EMessageBroadcastByConsoleBase.TUTOR_STEP_CHANGE, payload => {
    if (!payload) {
      return;
    }
    
    fn(payload.id, payload.to, payload.from);
  });
}
