import {
  FetcherConfig
} from '@alicloud/fetcher';

export interface IMergerQueueItem {
  resolve(data: unknown): void;
  reject(err: Error): void;
}

export interface IMergerOptions {
  /**
   * 默认用 FetcherConfig._id，也可以自己指定（不推荐自己指定）
   */
  key?: string;
}

export interface IMergerOptionsParsed extends Required<IMergerOptions> {}

export interface IFetcherConfigExtra {
  /**
   * 默认，请求在 _id（见 @alicloud/fetcher）相同的情况下，如果同一时间内，有相同 _id 的请求
   */
  merger?: boolean | null | IMergerOptions;
}

export interface IFetcherConfigExtended extends FetcherConfig, IFetcherConfigExtra {}

/**
 * request 里会把 merger 局限成 null | IMergerOptions
 */
export interface IFetcherConfigExtendedForResponse extends FetcherConfig {
  merger?: null | IMergerOptionsParsed;
}
