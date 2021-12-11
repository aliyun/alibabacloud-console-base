import {
  IPayloadMicroBrowserPortalToggleVisible
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  subscribeByConsoleBase
} from '../../../util';

export default function onToggleVisible(fn: (portalKey: string, visible: boolean) => void): () => void {
  return subscribeByConsoleBase<IPayloadMicroBrowserPortalToggleVisible>(EMessageBroadcastByApp.MICRO_BROWSER_PORTAL_TOGGLE_VISIBLE, payload => {
    if (fn && payload) {
      fn(payload.portalKey, payload.visible);
    }
  });
}