import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  subscribeByConsoleBase
} from '../../../util';

export default function onOpenHelp(fn: (url: string) => void): () => void {
  return subscribeByConsoleBase<string>(EMessageBroadcastByApp.HELP_OPEN, payload => {
    if (payload && fn) {
      fn(payload);
    }
  });
}