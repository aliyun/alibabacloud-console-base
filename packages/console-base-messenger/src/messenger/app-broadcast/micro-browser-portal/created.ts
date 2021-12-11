import {
  IPayloadMicroBrowserPortalCreated
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  broadcastPromiseByApp
} from '../../../util';

export default function created(portalKey: string, title: string): Promise<HTMLDivElement> {
  return broadcastPromiseByApp<string, IPayloadMicroBrowserPortalCreated>(EMessageBroadcastByApp.MICRO_BROWSER_PORTAL_CREATED, {
    portalKey,
    title
  }).then(selector => {
    const el = document.querySelector(selector);
    
    if (!el) {
      throw new Error(`[Messenger] Cannot get portal container, portalKey="${portalKey}", title="${title}", selector="${selector}".`);
    }
    
    return el as HTMLDivElement;
  });
}