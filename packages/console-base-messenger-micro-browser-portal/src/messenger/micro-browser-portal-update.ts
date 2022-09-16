import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  IMicroBrowserPortalUpdateInfo,
  IPayloadMicroBrowserPortalUpdate
} from '../types';
import {
  MESSAGE_TYPE_MICRO_BROWSER_PORTAL_UPDATE
} from '../const';

export default function microBrowserPortalUpdate(portalKey: string, info: IMicroBrowserPortalUpdateInfo): void {
  return broadcastByApp<IPayloadMicroBrowserPortalUpdate>(MESSAGE_TYPE_MICRO_BROWSER_PORTAL_UPDATE, {
    portalKey,
    ...info
  });
}