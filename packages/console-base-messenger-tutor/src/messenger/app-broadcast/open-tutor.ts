import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadTutorOpen
} from '../../types';
import {
  MESSAGE_TYPE_TUTOR_OPEN
} from '../../const';

/**
 * 打开教程（到第几步）
 * 
 * @deprecated 不要再使用，用 Viper 上的微教程管理进行发布
 */
export default function openTutor(id: string, step?: number): void {
  broadcastByApp<IPayloadTutorOpen>(MESSAGE_TYPE_TUTOR_OPEN, {
    id,
    step
  });
}