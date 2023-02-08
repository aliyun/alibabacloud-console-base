import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_SIDE_PANEL__ITEM_ACTIVE_CHANGE
} from '../const';

export default function sidePanelItemActiveChange(key: string, active: boolean): void {
  broadcastByApp<[string, boolean]>(MESSAGE_TYPE_SIDE_PANEL__ITEM_ACTIVE_CHANGE, [key, active]);
}