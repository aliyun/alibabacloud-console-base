import {
  FetcherError
} from '@alicloud/fetcher';

const CODE_IGNORE_LIST: string[] = [
  'ConsoleNeedLogin'
];

/**
 * 是否忽略该错误（不进行上报）
 */
export default function shouldIgnoreError(err: FetcherError, shouldIgnore?: (err: FetcherError) => boolean): boolean {
  if (CODE_IGNORE_LIST.includes(err.code as string)) {
    return true;
  }
  
  if (shouldIgnore) {
    return shouldIgnore(err);
  }
  
  return false;
}
