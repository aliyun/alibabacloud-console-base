import {
  Unsubscribe,
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_SIDE_PANEL__ITEM_ACTIVE_CHANGE
} from '../const';

export default function onSidePanelItemActiveChange(fn: (key: string, active: boolean) => void): Unsubscribe {
  return subscribeByApp<[string, boolean]>(MESSAGE_TYPE_SIDE_PANEL__ITEM_ACTIVE_CHANGE, (payload: [string, boolean]) => {
    fn(...payload);
  });
}