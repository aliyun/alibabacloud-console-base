import { FetcherError } from '@alicloud/fetcher';
/**
 * 是否忽略该错误（不进行上报）
 */
export default function shouldIgnoreError(err: FetcherError, shouldIgnore?: (err: FetcherError) => boolean): boolean;
