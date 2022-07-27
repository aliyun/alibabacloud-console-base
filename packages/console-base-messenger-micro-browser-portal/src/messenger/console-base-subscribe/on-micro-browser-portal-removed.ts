import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_MICRO_BROWSER_PORTAL_REMOVED
} from '../../const';

export default function onMicroBrowserPortalRemoved(fn: (portalKey: string) => void): () => void {
  return subscribeByConsoleBase<string>(MESSAGE_TYPE_MICRO_BROWSER_PORTAL_REMOVED, portalKey => {
    if (fn && portalKey) {
      fn(portalKey);
    }
  });
}