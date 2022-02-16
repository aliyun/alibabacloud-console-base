import {
  EMessageBroadcastByConsoleBase
} from '../../enum';
import {
  subscribeOnceByApp
} from '../../util';

/**
 * console-base 加载完成时进行回调，一般情况下不需要调用，在 @alicloud/console-base-messenger 中已经处理，
 * 可以保证在 ready 之前就可以跟 console-base 进行交互
 */
export default function onReady(fn: () => void): () => void {
  return subscribeOnceByApp(EMessageBroadcastByConsoleBase.READY, fn);
}
