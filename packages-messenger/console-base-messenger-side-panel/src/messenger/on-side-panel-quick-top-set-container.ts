import {
  Unsubscribe,
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_SIDE_PANEL__QUICK_TOP_SET_CONTAINER
} from '../const';

export default function onSidePanelQuickTopSetContainer(fn: (container: Window | HTMLElement | null) => void): Unsubscribe {
  return subscribeByApp<string | null>(MESSAGE_TYPE_SIDE_PANEL__QUICK_TOP_SET_CONTAINER, payload => {
    if (!payload) {
      fn(null);
    } else if (payload === 'window') {
      fn(window);
    } else {
      try {
        fn(document.querySelector<HTMLElement>(payload));
      } catch (err) {
        // ignore
      }
    }
  });
}
