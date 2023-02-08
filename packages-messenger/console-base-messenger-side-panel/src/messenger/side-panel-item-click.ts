import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_SIDE_PANEL__ITEM_CLICK
} from '../const';

export default function sidePanelItemClick(key: string): void {
  broadcastByApp<string>(MESSAGE_TYPE_SIDE_PANEL__ITEM_CLICK, key);
}