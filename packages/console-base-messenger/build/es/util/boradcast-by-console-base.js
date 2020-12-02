import { broadcast } from '@alicloud/post-message';

/**
 * ConsoleBase 发消息，仅限定 type，不需要记录日志
 */
export default function broadcastByConsoleBase(type, payload) {
  broadcast(type, payload);
}