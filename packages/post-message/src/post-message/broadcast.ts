import {
  buildMessageData
} from '../util';

import {
  win
} from './_the-message';

function broadcast(type: string): void;
function broadcast<P>(type: string, payload: P): void;

/**
 * 广播消息，当传入的对象 payload 不是 plain 对象的时候（如 Error、function、DOMElement、JSX 等），这里会报错
 * 「Uncaught DOMException: The object could not be cloned.」或 「DataCloneError: The object could not be cloned.」
 * 这个错误不能吃掉，因为使用者需要同步地知道调用失败了
 */
function broadcast<P>(type: string, payload?: P, targetOrigin: string = win.location.href): void {
  // postMessage 的兼容性已经很好了，见 https://caniuse.com/#search=postMessage
  // 不过还是要稍稍谨慎一些
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!win.postMessage) {
    return;
  }
  
  win.postMessage(buildMessageData(type, payload), targetOrigin);
}

/**
 * 广播消息，当传入的对象 payload 不是 plain 对象的时候（如 Error、function、DOMElement、JSX 等），这里会报错
 * 「Uncaught DOMException: The object could not be cloned.」或 「DataCloneError: The object could not be cloned.」
 * 这个错误不能吃掉，因为使用者需要同步地知道调用失败了
 */
export default broadcast;