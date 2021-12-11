import {
  IPayloadTutorDismiss
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import {
  broadcastByConsoleBase
} from '../../../util';

export default function tutorDismiss(id: string, done = false): void {
  broadcastByConsoleBase<IPayloadTutorDismiss>(EMessageBroadcastByConsoleBase.TUTOR_DISMISS, {
    id,
    done
  });
}
