import {
  Unsubscribe,
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_SIDE_PANEL__ITEM_REMOVE
} from '../const';

export default function onSidePanelItemRemove(fn: (payload: string) => void): Unsubscribe {
  return subscribeByConsoleBase<string>(MESSAGE_TYPE_SIDE_PANEL__ITEM_REMOVE, fn);
}