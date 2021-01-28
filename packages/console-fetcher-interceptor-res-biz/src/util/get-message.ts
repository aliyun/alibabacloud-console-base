import {
  IBizJson,
  TGetMessage
} from '../types';

export default function getMessage(json: IBizJson, messageGetter?: TGetMessage): string | undefined {
  if (typeof messageGetter === 'function') {
    return messageGetter(json);
  }
  
  if (typeof messageGetter === 'string') {
    return json[messageGetter] as string;
  }
  
  return json.message;
}
