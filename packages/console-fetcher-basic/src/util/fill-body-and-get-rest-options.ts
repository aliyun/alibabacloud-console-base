import {
  FetcherOptionsForQuickPost
} from '@alicloud/fetcher';

import {
  IConsoleFetcherConfig,
  IConsoleApiBody,
  IConsoleApiOptions,
  IConsoleApiBodyMulti
} from '../types';

export default function fillBodyAndGetRestOptions(body: IConsoleApiBody | IConsoleApiBodyMulti, options?: IConsoleApiOptions): FetcherOptionsForQuickPost<IConsoleFetcherConfig> {
  if (!options) {
    return {};
  }
  
  const {
    region,
    roa,
    ...restOptions
  } = options;
  
  if (region) {
    body.region = region;
  }
  
  if (roa) {
    body.content = typeof roa === 'string' ? roa : JSON.stringify(roa); // ROA 形式的接口要在 body 中透传参数，参数名是 content...
  }
  
  return restOptions;
}
