import {
  broadcastPromiseByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadMicroBrowserPortalCreated
} from '../types';
import {
  MESSAGE_TYPE_MICRO_BROWSER_PORTAL_CREATED
} from '../const';

/**
 * 通知 MicroBrowserPortal 创建完成，selector 为创建节点的选择器，在这里解析为真正的 HTML 元素（找不到则报错）
 */
export default function microBrowserPortalCreated<E>(portalKey: string, title: string, extra?: E): Promise<HTMLDivElement> {
  return broadcastPromiseByApp<string, IPayloadMicroBrowserPortalCreated<E>>(MESSAGE_TYPE_MICRO_BROWSER_PORTAL_CREATED, {
    portalKey,
    title,
    extra
  }).then(selector => {
    const el = document.querySelector(selector);
    
    if (!el) {
      throw new Error(`[Messenger] Cannot get portal container, portalKey="${portalKey}", title="${title}", selector="${selector}".`);
    }
    
    return el as HTMLDivElement;
  });
}