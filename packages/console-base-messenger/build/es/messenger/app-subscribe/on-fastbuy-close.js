import { EMessageBroadcastByConsoleBase } from '../../const';
import subscribeByApp from '../../util/subscribe-by-app';
export default function onFastbuyClose(fn) {
  return subscribeByApp(EMessageBroadcastByConsoleBase.FASTBUY_CLOSE, fn);
}