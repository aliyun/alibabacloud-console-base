import {
  IPayloadMicroBrowserPortalCreated
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  subscribePromiseByConsoleBase
} from '../../../util';

export default function onCreated(fn: (portalKey: string, title: string) => string): () => void {
  return subscribePromiseByConsoleBase<string, IPayloadMicroBrowserPortalCreated>(EMessageBroadcastByApp.MICRO_BROWSER_PORTAL_CREATED, payload => fn(payload.portalKey, payload.title));
}