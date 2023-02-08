import _kebabCase from 'lodash/kebabCase';
import _reduce from 'lodash/reduce';

import {
  TIntlMessagesMap
} from '../types';

/**
 * 从传入的 map 中提取当前 locale 需要的 messages 对象
 */
export default function getMessages<T>(messagesMap: TIntlMessagesMap<T>, locale: string, localeDefault = 'en-US'): T {
  const theMessageMap: TIntlMessagesMap<T> = _reduce(messagesMap, (result: TIntlMessagesMap<T>, v: T, k: string) => {
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
  const messages: T = theMessageMap[_kebabCase(locale)]!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
  const messagesDefault: T = theMessageMap[_kebabCase(localeDefault)]!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
  
  return messages && messages === messagesDefault ? messages : {
    ...messagesDefault,
    ...messages
  };
}
