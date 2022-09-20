import {
  broadcastPromiseByApp
} from '@alicloud/console-base-messenger-base';

import {
  IMicroBrowserPortalSizeConfig,
  IPayloadMicroBrowserPortalCreated
} from '../types';
import {
  MESSAGE_TYPE_MICRO_BROWSER_PORTAL_CREATED
} from '../const';

/**
 * 通知 MicroBrowserPortal 创建完成，selector 为创建节点的选择器，在这里解析为真正的 HTML 元素（找不到则报错）
 * 
 * 1. MicroBrowserPortal 在 useEffect 中通过 microBrowserPortalCreated 通知 portal 已创建
 * 2. MicroBrowser 在 useEffect 中使用 onMicroBrowserPortalCreated 知道需要创建什么样的容器元素，并将容器元素的选择器以 Promise result 的形式返回
 * 3. MicroBrowserPortal 调用的 microBrowserPortalCreated 的 promise 接收到 MicroBrowser 返回选择器，并通过选择器找到对应的元素
 * 4. MicroBrowserPortal 通过 createPortal 将自己的 children 渲染到 microBrowserPortalCreated 得到的元素中
 * 
 * 由此，完成一个通过将事件封装成 Promise 和 createPortal 将任意 React 组件（可以和 MicroBrowser 不在同一个应用）渲染到 MicroBrowser 的逻辑
 */
export default function microBrowserPortalCreated(portalKey: string, title: string, sizeConfig?: IMicroBrowserPortalSizeConfig): Promise<HTMLDivElement> {
  return broadcastPromiseByApp<string, IPayloadMicroBrowserPortalCreated>(MESSAGE_TYPE_MICRO_BROWSER_PORTAL_CREATED, {
    portalKey,
    title,
    sizeConfig
  }).then(selector => {
    const el = document.querySelector(selector);
    
    if (!el) {
      throw new Error(`[Messenger] Cannot get portal container, portalKey="${portalKey}", title="${title}", selector="${selector}".`);
    }
    
    return el as HTMLDivElement;
  });
}