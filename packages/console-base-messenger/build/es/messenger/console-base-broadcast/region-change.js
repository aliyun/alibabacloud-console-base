import { EMessageBroadcastByConsoleBase } from '../../const';
import broadcastByConsoleBase from '../../util/boradcast-by-console-base';
/**
 * 通知控制台应用：用户选择新的区域
 */

export default function regionChange(payload) {
  broadcastByConsoleBase(EMessageBroadcastByConsoleBase.REGION_CHANGE, payload);
}