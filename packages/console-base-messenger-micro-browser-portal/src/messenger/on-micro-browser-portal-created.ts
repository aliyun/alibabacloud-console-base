import {
  subscribePromiseByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadMicroBrowserPortalCreated
} from '../types';
import {
  MESSAGE_TYPE_MICRO_BROWSER_PORTAL_CREATED
} from '../const';

function onMicroBrowserPortalCreated(fn: (portalKey: string, title: string) => string): () => void;
function onMicroBrowserPortalCreated<P>(fn: (portalKey: string, title: string, extraProps: P) => string): () => void;

function onMicroBrowserPortalCreated<P = undefined>(fn: (portalKey: string, title: string, extraProps?: P) => string): () => void {
  return subscribePromiseByConsoleBase<string, IPayloadMicroBrowserPortalCreated>(MESSAGE_TYPE_MICRO_BROWSER_PORTAL_CREATED, payload => fn(payload.portalKey, payload.title));
}

export default onMicroBrowserPortalCreated;