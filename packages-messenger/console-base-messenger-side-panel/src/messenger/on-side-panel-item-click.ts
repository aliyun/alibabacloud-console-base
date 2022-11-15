import {
  Unsubscribe,
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_SIDE_PANEL__ITEM_CLICK
} from '../const';

export default function onSidePanelItemClick(fn: (key: string) => void): Unsubscribe {
  return subscribeByApp<string>(MESSAGE_TYPE_SIDE_PANEL__ITEM_CLICK, (payload: string) => {
    fn(payload);
  });
}