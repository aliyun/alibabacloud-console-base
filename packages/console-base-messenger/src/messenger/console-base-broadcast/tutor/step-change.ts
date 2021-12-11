import {
  IPayloadTutorStepChange
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import {
  broadcastByConsoleBase
} from '../../../util';

export default function tutorStepChange(id: string, to: number, from: number): void {
  broadcastByConsoleBase<IPayloadTutorStepChange>(EMessageBroadcastByConsoleBase.TUTOR_STEP_CHANGE, {
    id,
    to,
    from
  });
}
