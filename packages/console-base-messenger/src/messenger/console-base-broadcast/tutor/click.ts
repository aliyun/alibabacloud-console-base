import {
  IPayloadTutorClick
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import broadcastByConsoleBase from '../../../util/boradcast-by-console-base';

/**
 * 微教程内部元素 ::tutor-click 点击后需要通知应用
 */
export default function tutorClick(id: string, value: string): void {
  broadcastByConsoleBase<IPayloadTutorClick>(EMessageBroadcastByConsoleBase.TUTOR_CLICK, {
    id,
    value
  });
}
