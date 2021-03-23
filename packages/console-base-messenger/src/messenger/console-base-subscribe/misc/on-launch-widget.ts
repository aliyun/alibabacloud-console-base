import {
  IPayloadLaunchWidget
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  subscribePromiseByConsoleBase
} from '../../../util/subscribe-by-console-base';

/**
 * console-base 响应 Widget 唤起
 * 
 * 泛型说明：
 * 
 * - T Promise 返回类型
 * - P props 类型
 * - E extra 类型
 */
export default function onLaunchWidget<T = void, P = void, E = void>(fn: (payload: IPayloadLaunchWidget<P, E>) => Promise<T>): () => void {
  return subscribePromiseByConsoleBase<T, IPayloadLaunchWidget<P, E>>(EMessageBroadcastByApp.LAUNCH_WIDGET, fn);
}
