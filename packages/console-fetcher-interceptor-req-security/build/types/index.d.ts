import { Fetcher } from '@alicloud/fetcher';
import { IFetcherConfigExtraSecurity as FetcherConfigExtraSecurity, IFetcherConfigExtendedSecurity as FetcherConfigExtendedSecurity } from './types';
export default function intercept(fetcher: Fetcher<FetcherConfigExtendedSecurity>): () => void;
export type { FetcherConfigExtraSecurity, // 便于外边扩展（当需要多次扩展的时候）
FetcherConfigExtendedSecurity };
