import {
  Unsubscribe,
  subscribePromiseByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadMicroBrowserPortalCreated,
  ISubscribeMicroBrowserPortalCreated
} from '../types';
import {
  MESSAGE_TYPE_MICRO_BROWSER_PORTAL_CREATED
} from '../const';

export default function onMicroBrowserPortalCreated(fn: ISubscribeMicroBrowserPortalCreated): Unsubscribe {
  return subscribePromiseByConsoleBase<string, IPayloadMicroBrowserPortalCreated>(MESSAGE_TYPE_MICRO_BROWSER_PORTAL_CREATED, payload => {
    return fn(payload.portalKey, payload.title, payload.sizeConfig);
  });
}