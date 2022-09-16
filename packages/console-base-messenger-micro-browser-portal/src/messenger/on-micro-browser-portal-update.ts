import {
  Unsubscribe,
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadMicroBrowserPortalUpdate,
  ISubscribeMicroBrowserPortalUpdate
} from '../types';
import {
  MESSAGE_TYPE_MICRO_BROWSER_PORTAL_UPDATE
} from '../const';

export default function onMicroBrowserPortalUpdate(fn: ISubscribeMicroBrowserPortalUpdate): Unsubscribe {
  return subscribeByConsoleBase<IPayloadMicroBrowserPortalUpdate>(MESSAGE_TYPE_MICRO_BROWSER_PORTAL_UPDATE, payload => {
    const {
      portalKey,
      ...info
    } = payload;
    
    fn(portalKey, info);
  });
}