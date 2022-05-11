import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

export default function removed(portalKey: string): void {
  return broadcastByApp<string>(EMessageBroadcastByApp.MICRO_BROWSER_PORTAL_REMOVED, portalKey);
}