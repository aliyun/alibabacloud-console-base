import {
  IPayloadTutorClick
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import subscribeByApp from '../../../util/subscribe-by-app';

/**
 * 微教程内部元素 ::tutor-click 点击后的事件注册
 */
export default function onTutorClick(fn: (id: string, value: string) => void): () => void {
  return subscribeByApp<IPayloadTutorClick>(EMessageBroadcastByConsoleBase.TUTOR_CLICK, payload => {
    if (!payload) {
      return;
    }
    
    fn(payload.id, payload.value);
  });
}
