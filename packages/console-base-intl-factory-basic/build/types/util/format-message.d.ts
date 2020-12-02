import { TMessages } from '../types';
/**
 * 获取替换插值后的原文案
 */
export default function formatMessage<V = void>(messages: TMessages, id: string, values?: V): string;
