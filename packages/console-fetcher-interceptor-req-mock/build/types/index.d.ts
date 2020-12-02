import { Fetcher } from '@alicloud/fetcher';
import { IMockOptions } from './types';
/**
 * 利用 mocks.alibaba-inc.com 对接口（OneConsole 和 非 OneConsole 接口）进行，可通过 options 参数进行微调
 */
export default function intercept(fetcher: Fetcher, options?: IMockOptions): () => void;
