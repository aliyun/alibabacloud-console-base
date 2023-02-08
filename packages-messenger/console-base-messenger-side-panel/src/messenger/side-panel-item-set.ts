import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_SIDE_PANEL__ITEM_SET
} from '../const';
import {
  IMessengerSidePanelPayloadItem
} from '../types';

export default function sidePanelItemSet(payload: IMessengerSidePanelPayloadItem): void {
  broadcastByApp<IMessengerSidePanelPayloadItem>(MESSAGE_TYPE_SIDE_PANEL__ITEM_SET, payload);
}