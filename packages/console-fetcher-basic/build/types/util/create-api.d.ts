import { FetcherFnPost } from '@alicloud/fetcher';
import { ETypeApi } from '../const';
import { IConsoleFetcherConfig, IFnConsoleApi } from '../types';
export default function createApi(fetcherPost: FetcherFnPost<IConsoleFetcherConfig>, type: ETypeApi): IFnConsoleApi;
