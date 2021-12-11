import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import {
  broadcastByConsoleBase
} from '../../../util';

/**
 * 通知控制台应用：你来刷新地域相关的资源数啦
 */
export default function regionRefreshResourceCount(payload: string[]): void {
  broadcastByConsoleBase<string[]>(EMessageBroadcastByConsoleBase.REGION_REFRESH_RESOURCE_COUNT, payload);
}
