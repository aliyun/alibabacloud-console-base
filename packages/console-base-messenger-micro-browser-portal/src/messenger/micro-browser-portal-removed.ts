import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_MICRO_BROWSER_PORTAL_REMOVED
} from '../const';

export default function microBrowserPortalRemoved(portalKey: string): void {
  return broadcastByApp<string>(MESSAGE_TYPE_MICRO_BROWSER_PORTAL_REMOVED, portalKey);
}