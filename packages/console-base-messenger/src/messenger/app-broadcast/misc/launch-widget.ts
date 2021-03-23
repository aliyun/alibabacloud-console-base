import {
  IPayloadLaunchWidget
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  broadcastPromiseByApp
} from '../../../util/broadcast-by-app';

/**
 * 唤起 widget，并返回 Promise，需要传入 Widget 的 id + version + props，并通过 extra 传递更多的信息
 * 
 * 泛型说明：
 * 
 * - T Promise 返回类型
 * - P widget props 类型
 * - E extra
 */
export default function launchWidget<T = void, P = void, E = void>(id: string, version: string, props?: P, extra?: E): Promise<T> {
  return broadcastPromiseByApp<T, IPayloadLaunchWidget<P, E>>(EMessageBroadcastByApp.LAUNCH_WIDGET, {
    id,
    version,
    props,
    extra
  });
}
