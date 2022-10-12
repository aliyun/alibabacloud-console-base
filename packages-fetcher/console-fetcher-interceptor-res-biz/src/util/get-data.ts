import {
  IBizJson,
  TGetData
} from '../types';

export default function getData(json: IBizJson, getter?: TGetData): any { // eslint-disable-line @typescript-eslint/no-explicit-any
  if (typeof getter === 'function') {
    return getter(json);
  }
  
  if (typeof getter === 'string') {
    return (json as any)[getter]; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
  
  return json.data; // default
}
