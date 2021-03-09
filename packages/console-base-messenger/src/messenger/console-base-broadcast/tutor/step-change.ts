import {
  IPayloadTutorStepChange
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import broadcastByConsoleBase from '../../../util/boradcast-by-console-base';

export default function tutorStepChange(id: string, step: number): void {
  broadcastByConsoleBase<IPayloadTutorStepChange>(EMessageBroadcastByConsoleBase.TUTOR_STEP_CHANGE, {
    id,
    step
  });
}
