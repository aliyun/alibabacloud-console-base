import { EMessageBroadcastByConsoleBase } from '../../const';
import subscribeByApp from '../../util/subscribe-by-app';
export default function onFastbuyBuy(fn) {
  return subscribeByApp(EMessageBroadcastByConsoleBase.FASTBUY_BUY, fn);
}