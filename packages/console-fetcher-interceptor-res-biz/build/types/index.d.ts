import { Fetcher } from '@alicloud/fetcher';
import { IFetcherConfigExtraBiz as FetcherConfigExtraBiz, IFetcherConfigExtendedBiz as FetcherConfigExtendedBiz } from './types';
import { ERROR_BIZ } from './const';
export default function intercept(fetcher: Fetcher<FetcherConfigExtendedBiz>): () => void;
export { ERROR_BIZ };
export type { FetcherConfigExtraBiz, FetcherConfigExtendedBiz };
