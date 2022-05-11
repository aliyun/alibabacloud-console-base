import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadTutorRegister
} from '../../../types';

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
