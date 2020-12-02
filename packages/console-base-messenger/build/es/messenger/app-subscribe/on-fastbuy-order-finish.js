import { EMessageBroadcastByConsoleBase } from '../../const';
import subscribeByApp from '../../util/subscribe-by-app';
export default function onFastbuyOrderFinish(fn) {
  return subscribeByApp(EMessageBroadcastByConsoleBase.FASTBUY_ORDER_FINISH, fn);
}