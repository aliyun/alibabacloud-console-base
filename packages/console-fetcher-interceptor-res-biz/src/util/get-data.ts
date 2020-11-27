import {
  IBizJson,
  BizGetData
} from '../types';

export default function getData(json: IBizJson, dataGetter?: BizGetData): any { // eslint-disable-line @typescript-eslint/no-explicit-any
  if (typeof dataGetter === 'function') {
    return dataGetter(json);
  }
  
  if (typeof dataGetter === 'string') {
    return json[dataGetter];
  }
  
  return json.data;
}
