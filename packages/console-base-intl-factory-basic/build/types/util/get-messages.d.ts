import { TMessages, TMessagesMap } from '../types';
/**
 * 从传入的 map 中提取当前 locale 需要的 messages 对象
 */
export default function getMessages(messagesMap: TMessagesMap, locale: string, localeDefault?: string): TMessages;
