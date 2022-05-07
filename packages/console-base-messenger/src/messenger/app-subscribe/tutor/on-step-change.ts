import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadTutorStepChange
} from '../../../types';

export default function onTutorStepChange(fn: (id: string, to: number, from: number) => void): () => void {
  return subscribeByApp<IPayloadTutorStepChange>(EMessageBroadcastByConsoleBase.TUTOR_STEP_CHANGE, payload => {
    if (!payload) {
      return;
    }
    
    fn(payload.id, payload.to, payload.from);
  });
}
