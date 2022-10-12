import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  DATA_KEY_RESOURCE_GROUP_PORTAL,
  MESSAGE_TYPE_RESOURCE_GROUP_PORTAL
} from '../../const';

export default function onResourceGroupPortal(fn: (el: HTMLElement | null) => void): () => void {
  return subscribeByConsoleBase(MESSAGE_TYPE_RESOURCE_GROUP_PORTAL, () => {
    try {
      // 调用者自行创建或删除带属性的节点后，调用 regionPortal 进行通知
      fn(document.querySelector(`*[${DATA_KEY_RESOURCE_GROUP_PORTAL}]`));
    } catch (err) {
      // ignore
    }
  });
}
