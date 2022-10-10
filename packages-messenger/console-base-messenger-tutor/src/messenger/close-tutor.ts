import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_TUTOR_CLOSE
} from '../const';

/**
 * 主动关闭教程
 * 
 * @deprecated 不要再使用，用 Viper 上的微教程管理进行发布
 */
export default function closeTutor(id: string): void {
  broadcastByApp<string>(MESSAGE_TYPE_TUTOR_CLOSE, id);
}
