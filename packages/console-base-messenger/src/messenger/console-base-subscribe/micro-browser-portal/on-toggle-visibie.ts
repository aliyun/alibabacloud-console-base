import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadMicroBrowserPortalToggleVisible
} from '../../../types';

export default function onToggleVisible(fn: (portalKey: string, visible: boolean) => void): () => void {
  return subscribeByConsoleBase<IPayloadMicroBrowserPortalToggleVisible>(EMessageBroadcastByApp.MICRO_BROWSER_PORTAL_TOGGLE_VISIBLE, payload => {
    if (fn && payload) {
      fn(payload.portalKey, payload.visible);
    }
  });
}