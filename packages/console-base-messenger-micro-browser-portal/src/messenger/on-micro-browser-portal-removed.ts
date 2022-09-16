import {
  Unsubscribe,
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  ISubscribeMicroBrowserPortalRemoved
} from '../types';
import {
  MESSAGE_TYPE_MICRO_BROWSER_PORTAL_REMOVED
} from '../const';

export default function onMicroBrowserPortalRemoved(fn: ISubscribeMicroBrowserPortalRemoved): Unsubscribe {
  return subscribeByConsoleBase<string>(MESSAGE_TYPE_MICRO_BROWSER_PORTAL_REMOVED, portalKey => {
    fn(portalKey);
  });
}