import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadMicroPrefUpdated
} from '../../types';
import {
  MESSAGE_TYPE_MICRO_PREF_UPDATED
} from '../../const';

export default function onMicroPrefUpdated<T = unknown>(fn: (key: string, value: T) => void): () => void {
  return subscribeByApp<IPayloadMicroPrefUpdated<T>>(MESSAGE_TYPE_MICRO_PREF_UPDATED, payload => {
    fn(payload.key, payload.value);
  });
}
