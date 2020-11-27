import {
  IBizJson,
  BizGetCode
} from '../types';

export default function getCode(json: IBizJson, codeGetter?: BizGetCode): string | undefined {
  if (typeof codeGetter === 'function') {
    return codeGetter(json);
  }
  
  if (typeof codeGetter === 'string') {
    return json[codeGetter] as string;
  }
  
  return json.code;
}
