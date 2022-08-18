import {
  IBizJson,
  TGetCode
} from '../types';

export default function getCode(json: IBizJson, getter?: TGetCode): string | undefined {
  if (typeof getter === 'function') {
    return getter(json);
  }
  
  if (typeof getter === 'string') {
    return (json as any)[getter] as string; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
  
  return json.code; // default
}
