import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_SIDE_PANEL__ITEM_REMOVE
} from '../const';

export default function sidePanelItemRemove(payload: string): void {
  broadcastByApp<string>(MESSAGE_TYPE_SIDE_PANEL__ITEM_REMOVE, payload);
}