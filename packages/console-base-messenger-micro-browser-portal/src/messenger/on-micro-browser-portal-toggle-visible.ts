import {
  Unsubscribe,
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadMicroBrowserPortalToggleVisible,
  ISubscribeMicroBrowserPortalToggleVisible
} from '../types';
import {
  MESSAGE_TYPE_MICRO_BROWSER_PORTAL_TOGGLE_VISIBLE
} from '../const';

export default function onMicroBrowserPortalToggleVisible(fn: ISubscribeMicroBrowserPortalToggleVisible): Unsubscribe {
  return subscribeByConsoleBase<IPayloadMicroBrowserPortalToggleVisible>(MESSAGE_TYPE_MICRO_BROWSER_PORTAL_TOGGLE_VISIBLE, payload => {
    fn(payload.portalKey, payload.visible);
  });
}