import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadTutorRegister
} from '../types';
import {
  MESSAGE_TYPE_TUTOR_REGISTER
} from '../const';

/**
 * 注册教程
 * 
 * @deprecated 不要再使用，用 Viper 上的微教程管理进行发布
 */
export default function registerTutor(id: string, contents: string[], title?: string): void {
  broadcastByApp<IPayloadTutorRegister>(MESSAGE_TYPE_TUTOR_REGISTER, {
    id,
    title,
    contents
  });
}
