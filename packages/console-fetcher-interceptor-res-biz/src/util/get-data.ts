import {
  IBizJson,
  TGetData
} from '../types';

export default function getData(json: IBizJson, dataGetter?: TGetData): any { // eslint-disable-line @typescript-eslint/no-explicit-any
  if (typeof dataGetter === 'function') {
    return dataGetter(json);
  }
  
  if (typeof dataGetter === 'string') {
    return (json as any)[dataGetter];
  }
  
  return json.data;
}
