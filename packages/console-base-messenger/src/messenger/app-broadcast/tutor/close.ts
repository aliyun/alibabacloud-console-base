import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  broadcastByApp
} from '../../../util/broadcast-by-app';

/**
 * 主动关闭教程
 */
export default function closeTutor(id: string): void {
  broadcastByApp<string>(EMessageBroadcastByApp.TUTOR_OPEN, id);
}
