import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  broadcastByApp
} from '../../../util';

/**
 * 主动关闭教程
 */
export default function closeTutor(id: string): void {
  broadcastByApp<string>(EMessageBroadcastByApp.TUTOR_CLOSE, id);
}
