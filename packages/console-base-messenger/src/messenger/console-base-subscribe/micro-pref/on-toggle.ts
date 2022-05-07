import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

export default function onToggleMicroPref(fn: (visible: boolean) => void): () => void {
  return subscribeByConsoleBase<boolean>(EMessageBroadcastByApp.MICRO_PREF_TOGGLE, payload => {
    fn(payload);
  });
}