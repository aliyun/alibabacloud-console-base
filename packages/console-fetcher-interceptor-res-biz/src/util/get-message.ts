import {
  IBizJson,
  BizGetMessage
} from '../types';

export default function getMessage(json: IBizJson, messageGetter?: BizGetMessage): string | undefined {
  if (typeof messageGetter === 'function') {
    return messageGetter(json);
  }
  
  if (typeof messageGetter === 'string') {
    return json[messageGetter] as string;
  }
  
  return json.message;
}
