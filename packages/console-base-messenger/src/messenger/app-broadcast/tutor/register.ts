import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  IPayloadTutorRegister
} from '../../../types';
import {
  broadcastByApp
} from '../../../util/broadcast-by-app';

/**
 * 注册教程
 */
export default function registerTutor(id: string, contents: string[]): void {
  broadcastByApp<IPayloadTutorRegister>(EMessageBroadcastByApp.TUTOR_REGISTER, {
    id,
    contents
  });
}
