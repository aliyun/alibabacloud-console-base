import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  TMessengerSidePanelQuickTopContainer
} from '../types';
import {
  MESSAGE_TYPE_SIDE_PANEL__QUICK_TOP_SET_CONTAINER
} from '../const';
import {
  getQuickTopTopContainerAsPayload
} from '../util';

export default function sidePanelQuickTopSetContainer(container: TMessengerSidePanelQuickTopContainer): void {
  broadcastByApp<string | null>(MESSAGE_TYPE_SIDE_PANEL__QUICK_TOP_SET_CONTAINER, getQuickTopTopContainerAsPayload(container));
}
