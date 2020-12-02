import _kebabCase from 'lodash/kebabCase';
import _reduce from 'lodash/reduce';

import {
  TMessages,
  TMessagesMap
} from '../types';

/**
 * 从传入的 map 中提取当前 locale 需要的 messages 对象
 */
export default function getMessages(messagesMap: TMessagesMap, locale: string, localeDefault = 'en-US'): TMessages {
  const theMessageMap: TMessagesMap = _reduce(messagesMap, (result: TMessagesMap, v: TMessages, k: string) => {
    const key = _kebabCase(k); // 'zhCN' / 'zh-CN' 'zh_CN' -> 'zh-cn' 我负责您的随意
    
    if (result[key]) {
      result[key] = {
        ...result[key],
        ...v
      };
    } else {
      result[key] = v;
    }
    
    return result;
  }, {});
  const messages: TMessages = theMessageMap[_kebabCase(locale)];
  const messagesDefault: TMessages = theMessageMap[_kebabCase(localeDefault)] || {};
  
  return messages === messagesDefault ? messages : {
    ...messagesDefault,
    ...messages
  };
}
