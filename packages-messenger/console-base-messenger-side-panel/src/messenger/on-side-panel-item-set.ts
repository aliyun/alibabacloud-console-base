import {
  Unsubscribe,
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_SIDE_PANEL__ITEM_SET
} from '../const';
import {
  IMessengerSidePanelPayloadItem
} from '../types';

export default function onSidePanelItemSet(fn: (payload: IMessengerSidePanelPayloadItem) => void): Unsubscribe {
  return subscribeByConsoleBase<IMessengerSidePanelPayloadItem>(MESSAGE_TYPE_SIDE_PANEL__ITEM_SET, fn);
}