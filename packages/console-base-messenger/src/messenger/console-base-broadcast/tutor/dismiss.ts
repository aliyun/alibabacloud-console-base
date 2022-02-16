import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadTutorDismiss
} from '../../../types';
import {
  broadcastByConsoleBase
} from '../../../util';

export default function tutorDismiss(id: string, done = false): void {
  broadcastByConsoleBase<IPayloadTutorDismiss>(EMessageBroadcastByConsoleBase.TUTOR_DISMISS, {
    id,
    done
  });
}
