import {
  broadcastPromiseByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadMicroBrowserPortalCreated
} from '../types';
import {
  MESSAGE_TYPE_MICRO_BROWSER_PORTAL_CREATED
} from '../const';

function microBrowserPortalCreated(portalKey: string, title: string): Promise<HTMLDivElement>;
function microBrowserPortalCreated<P>(portalKey: string, title: string, extraProps: P): Promise<HTMLDivElement>;

/**
 * 通知 MicroBrowserPortal 创建完成，selector 为创建节点的选择器，在这里解析为真正的 HTML 元素（找不到则报错）
 * 
 * @param portalKey
 * @param title
 * @param extraProps 额外的 props 放这里，由于不希望额外依赖，这里设计成了泛型
 */
function microBrowserPortalCreated<P = undefined>(portalKey: string, title: string, extraProps?: P): Promise<HTMLDivElement> {
  return broadcastPromiseByApp<string, IPayloadMicroBrowserPortalCreated<P>>(MESSAGE_TYPE_MICRO_BROWSER_PORTAL_CREATED, {
    portalKey,
    title,
    extraProps
  }).then(selector => {
    const el = document.querySelector(selector);
    
    if (!el) {
      throw new Error(`[Messenger] Cannot get portal container, portalKey="${portalKey}", title="${title}", selector="${selector}".`);
    }
    
    return el as HTMLDivElement;
  });
}

export default microBrowserPortalCreated;