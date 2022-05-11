import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

export default function onOpenHelp(fn: (url: string) => void): () => void {
  return subscribeByConsoleBase<string>(EMessageBroadcastByApp.HELP_OPEN, payload => {
    if (payload && fn) {
      fn(payload);
    }
  });
}