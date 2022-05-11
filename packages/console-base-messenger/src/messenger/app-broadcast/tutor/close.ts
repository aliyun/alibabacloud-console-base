import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

/**
 * 主动关闭教程
 */
export default function closeTutor(id: string): void {
  broadcastByApp<string>(EMessageBroadcastByApp.TUTOR_CLOSE, id);
}
