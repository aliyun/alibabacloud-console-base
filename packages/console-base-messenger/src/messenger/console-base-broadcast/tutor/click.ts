import {
  IPayloadTutorClick
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import broadcastByConsoleBase from '../../../util/boradcast-by-console-base';

export default function tutorClick(id: string, value: string): void {
  broadcastByConsoleBase<IPayloadTutorClick>(EMessageBroadcastByConsoleBase.TUTOR_CLICK, {
    id,
    value
  });
}
