import {
  IBizJson,
  TGetCode
} from '../types';

export default function getCode(json: IBizJson, codeGetter?: TGetCode): string | undefined {
  if (typeof codeGetter === 'function') {
    return codeGetter(json);
  }
  
  if (typeof codeGetter === 'string') {
    return (json as any)[codeGetter] as string;
  }
  
  return json.code;
}
