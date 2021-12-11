import {
  IPayloadTutorRegister
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  broadcastByApp
} from '../../../util';

/**
 * 注册教程
 */
export default function registerTutor(id: string, contents: string[], title?: string): void {
  broadcastByApp<IPayloadTutorRegister>(EMessageBroadcastByApp.TUTOR_REGISTER, {
    id,
    title,
    contents
  });
}
