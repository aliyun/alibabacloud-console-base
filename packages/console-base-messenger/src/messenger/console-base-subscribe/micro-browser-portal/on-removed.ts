import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

export default function onRemoved(fn: (portalKey: string) => void): () => void {
  return subscribeByConsoleBase<string>(EMessageBroadcastByApp.MICRO_BROWSER_PORTAL_REMOVED, portalKey => {
    if (fn && portalKey) {
      fn(portalKey);
    }
  });
}