import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  subscribeByConsoleBase
} from '../../../util';

export default function onToggleMicroPref(fn: (visible: boolean) => void): () => void {
  return subscribeByConsoleBase<boolean>(EMessageBroadcastByApp.MICRO_PREF_TOGGLE, payload => {
    fn(payload);
  });
}