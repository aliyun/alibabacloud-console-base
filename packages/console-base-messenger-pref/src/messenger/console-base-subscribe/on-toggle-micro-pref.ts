import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_MICRO_PREF_TOGGLE
} from '../../const';

export default function onToggleMicroPref(fn: (visible: boolean) => void): () => void {
  return subscribeByConsoleBase<boolean>(MESSAGE_TYPE_MICRO_PREF_TOGGLE, payload => {
    fn(payload);
  });
}