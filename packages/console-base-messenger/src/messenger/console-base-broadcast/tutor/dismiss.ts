import {
  broadcastByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadTutorDismiss
} from '../../../types';

export default function tutorDismiss(id: string, done = false): void {
  broadcastByConsoleBase<IPayloadTutorDismiss>(EMessageBroadcastByConsoleBase.TUTOR_DISMISS, {
    id,
    done
  });
}
