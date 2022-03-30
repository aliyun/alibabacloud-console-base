import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  broadcastByApp
} from '../../../util';

/**
 * 打开文档
 */
export default function openHelp(url: string): void {
  broadcastByApp<string>(EMessageBroadcastByApp.HELP_OPEN, url);
}