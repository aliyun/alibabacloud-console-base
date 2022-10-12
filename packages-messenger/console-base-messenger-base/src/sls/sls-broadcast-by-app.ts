import sls from '@alicloud/console-base-log-sls';

import {
  stringifyPayload
} from '../util';

/**
 * 记录应用发送给 console-base 的消息
 */
export default function slsBroadcastByApp(type: string, payload?: unknown, beforeReady?: boolean): void {
  sls('message_broadcast_by_app', {
    name: type,
    value: stringifyPayload(payload),
    beforeReady
  }, {
    sampling: 0.5,
    once: type
  });
}
