import {
  broadcastPromiseByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_PROMPT_ERROR
} from '../const';

/**
 * 错误提示
 * 
 * ！！应用不要直接调用，请通过 @alicloud/error-prompt-proxy，里边做了封装
 * 
 * payload 类型参考 @alicloud/error-prompt，之所以不从里边引类型是为了避免有可能产生的循环及不必要的依赖
 */
export default function promptError<T>(payload: T): Promise<void> {
  return broadcastPromiseByApp<void, T>(MESSAGE_TYPE_PROMPT_ERROR, payload);
}
