import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadMicroPrefUpdated
} from '../../../types';

export default function onMicroPrefUpdated<T = unknown>(fn: (key: string, value: T, valueOld: T) => void): () => void {
  return subscribeByApp<IPayloadMicroPrefUpdated<T>>(EMessageBroadcastByConsoleBase.MICRO_PREF_UPDATED, payload => {
    if (!fn || !payload?.key) {
      return;
    }
    
    fn(payload.key, payload.value, payload.valueOld);
  });
}
