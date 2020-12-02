import sls from '@alicloud/console-base-log-sls';
import stringifyPayload from '../stringify-payload';
/**
 * 记录应用发送给 console-base 的消息
 */

export default function slsBroadcastByApp(type, payload, beforeReady) {
  sls('message_broadcast_by_app', {
    name: type,
    value: stringifyPayload(payload),
    beforeReady: beforeReady
  });
}