import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

/**
 * 打开文档
 */
export default function openHelp(url: string): void {
  broadcastByApp<string>(EMessageBroadcastByApp.HELP_OPEN, url);
}