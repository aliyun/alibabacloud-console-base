import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadTutorStepChange
} from '../types';
import {
  MESSAGE_TYPE_TUTOR_STEP_CHANGE
} from '../const';

export default function onTutorStepChange(fn: (id: string, to: number, from: number) => void): () => void {
  return subscribeByApp<IPayloadTutorStepChange>(MESSAGE_TYPE_TUTOR_STEP_CHANGE, payload => {
    if (!payload) {
      return;
    }
    
    fn(payload.id, payload.to, payload.from);
  });
}
