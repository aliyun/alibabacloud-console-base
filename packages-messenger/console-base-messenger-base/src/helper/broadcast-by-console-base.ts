import {
  broadcast
} from '@alicloud/post-message';

function broadcastByConsoleBase(type: string): void;
function broadcastByConsoleBase<P>(type: string, payload: P): void;

function broadcastByConsoleBase<P = void>(type: string, payload?: P): void {
  broadcast(type, payload);
}

/**
 * ConsoleBase 发消息，仅限定 type，不需要记录日志
 */
export default broadcastByConsoleBase;