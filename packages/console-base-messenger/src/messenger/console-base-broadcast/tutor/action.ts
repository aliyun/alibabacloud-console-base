import {
  IPayloadTutorClick
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import broadcastByConsoleBase from '../../../util/boradcast-by-console-base';

/**
 * 微教程内部元素 :tutor-action[label]{value=xx} 点击后需要通知应用
 */
export default function tutorAction(id: string, value: string): void {
  broadcastByConsoleBase<IPayloadTutorClick>(EMessageBroadcastByConsoleBase.TUTOR_ACTION, {
    id,
    value
  });
}
