import {
  IBizJson,
  TGetMessage
} from '../types';

export default function getMessage(json: IBizJson, getter?: TGetMessage): string | undefined {
  if (typeof getter === 'function') {
    return getter(json);
  }
  
  if (typeof getter === 'string') {
    return (json as any)[getter] as string; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
  
  return json.message; // default
}
