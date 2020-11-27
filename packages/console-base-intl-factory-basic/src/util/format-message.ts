import {
  TMessages
} from '../types';

/**
 * 获取替换插值后的原文案
 */
export default function formatMessage<V = void>(messages: TMessages, id: string, values?: V): string {
  const text = messages[id] || id || '';
  
  if (!values) {
    return text;
  }
  
  // 如果文案当中有类似 `{xx}` 的地方需要将其用 `values.xx` 来替换
  return text.replace(/\\?{([^}]+)}/g, (match: string, k: string) => {
    if (match.charAt(0) === '\\') {
      return match.slice(1);
    }
    
    return values[k] === undefined ? '' : String(values[k]);
  });
}
