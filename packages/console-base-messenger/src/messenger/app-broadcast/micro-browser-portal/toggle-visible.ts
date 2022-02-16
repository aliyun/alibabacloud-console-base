import {
  IPayloadMicroBrowserPortalToggleVisible
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  broadcastByApp
} from '../../../util';

export default function toggleVisible(portalKey: string, visible = true): void {
  return broadcastByApp<IPayloadMicroBrowserPortalToggleVisible>(EMessageBroadcastByApp.MICRO_BROWSER_PORTAL_TOGGLE_VISIBLE, {
    portalKey,
    visible
  });
}