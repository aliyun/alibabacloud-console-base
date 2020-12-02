import { EMessageBroadcastByConsoleBase } from '../../const';
import subscribeByApp from '../../util/subscribe-by-app';
export default function onFastbuySubmitPayment(fn) {
  return subscribeByApp(EMessageBroadcastByConsoleBase.FASTBUY_SUBMIT_PAYMENT, fn);
}