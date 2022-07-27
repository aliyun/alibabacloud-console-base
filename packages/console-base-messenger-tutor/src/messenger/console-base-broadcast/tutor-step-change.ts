import {
  broadcastByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadTutorStepChange
} from '../../types';
import {
  MESSAGE_TYPE_TUTOR_STEP_CHANGE
} from '../../const';

export default function tutorStepChange(id: string, to: number, from: number): void {
  broadcastByConsoleBase<IPayloadTutorStepChange>(MESSAGE_TYPE_TUTOR_STEP_CHANGE, {
    id,
    to,
    from
  });
}
