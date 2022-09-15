import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadMicroBrowserPortalToggleVisible
} from '../types';
import {
  MESSAGE_TYPE_MICRO_BROWSER_PORTAL_TOGGLE_VISIBLE
} from '../const';

export default function onToggleVisible(fn: (portalKey: string, visible: boolean) => void): () => void {
  return subscribeByConsoleBase<IPayloadMicroBrowserPortalToggleVisible>(MESSAGE_TYPE_MICRO_BROWSER_PORTAL_TOGGLE_VISIBLE, payload => {
    fn(payload.portalKey, payload.visible);
  });
}