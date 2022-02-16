import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  broadcastByApp
} from '../../../util';

export default function removed(portalKey: string): void {
  return broadcastByApp<string>(EMessageBroadcastByApp.MICRO_BROWSER_PORTAL_REMOVED, portalKey);
}