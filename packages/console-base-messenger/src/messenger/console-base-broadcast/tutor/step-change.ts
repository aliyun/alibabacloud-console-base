import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadTutorStepChange
} from '../../../types';
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
