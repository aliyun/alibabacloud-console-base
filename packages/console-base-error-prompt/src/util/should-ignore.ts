import {
  TErrorPromptArg
} from '../types';
import {
  ERROR_NAME_WILL_IGNORE
} from '../const';

// 需要忽略的 error 的 name 列表，硬编码，不想依赖 @alicloud/console-fetcher 的输出
const ERROR_NAMES_IGNORE_LIST = [
  ERROR_NAME_WILL_IGNORE,
  'FetcherErrorRiskForbidden',
  'FetcherErrorRiskInvalid',
  'FetcherErrorRiskCancelled'
];

export default function shouldIgnore(o?: TErrorPromptArg): boolean {
  if (!o) {
    return true;
  }
  
  const name: string = (o as any).name || ''; // eslint-disable-line @typescript-eslint/no-explicit-any
  
  return ERROR_NAMES_IGNORE_LIST.includes(name);
}
