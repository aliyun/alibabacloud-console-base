import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadMicroBrowserPortalToggleVisible
} from '../../types';
import {
  MESSAGE_TYPE_MICRO_BROWSER_PORTAL_TOGGLE_VISIBLE
} from '../../const';

export default function microBrowserPortalToggleVisible(portalKey: string, visible = true): void {
  return broadcastByApp<IPayloadMicroBrowserPortalToggleVisible>(MESSAGE_TYPE_MICRO_BROWSER_PORTAL_TOGGLE_VISIBLE, {
    portalKey,
    visible
  });
}