import {
  READY
} from '../const';
import {
  broadcastByConsoleBase
} from '../helper';

/**
 * 通知控制台应用：console-base 已初始化完毕，可以进行交互
 */
export default function ready(): void {
  broadcastByConsoleBase(READY);
}
