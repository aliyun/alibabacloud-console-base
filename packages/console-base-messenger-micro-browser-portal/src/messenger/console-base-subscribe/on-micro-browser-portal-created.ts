import {
  subscribePromiseByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadMicroBrowserPortalCreated
} from '../../types';
import {
  MESSAGE_TYPE_MICRO_BROWSER_PORTAL_CREATED
} from '../../const';

export default function onMicroBrowserPortalCreated(fn: (portalKey: string, title: string) => string): () => void {
  return subscribePromiseByConsoleBase<string, IPayloadMicroBrowserPortalCreated>(MESSAGE_TYPE_MICRO_BROWSER_PORTAL_CREATED, payload => fn(payload.portalKey, payload.title));
}