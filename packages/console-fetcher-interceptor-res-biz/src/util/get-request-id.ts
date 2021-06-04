import {
  IBizJson,
  TGetRequestId
} from '../types';

export default function getRequestId(json: IBizJson, getter?: TGetRequestId): string | undefined {
  if (typeof getter === 'function') {
    return getter(json);
  }
  
  if (typeof getter === 'string') {
    return (json as any)[getter] as string; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
  
  return json.requestId;
}
