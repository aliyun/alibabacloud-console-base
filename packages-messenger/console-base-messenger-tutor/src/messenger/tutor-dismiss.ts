import {
  broadcastByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadTutorDismiss
} from '../types';
import {
  MESSAGE_TYPE_TUTOR_DISMISS
} from '../const';

export default function tutorDismiss(id: string, done = false): void {
  broadcastByConsoleBase<IPayloadTutorDismiss>(MESSAGE_TYPE_TUTOR_DISMISS, {
    id,
    done
  });
}
