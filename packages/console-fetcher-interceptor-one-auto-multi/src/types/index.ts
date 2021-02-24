import {
  FetcherConfig
} from '@alicloud/console-fetcher-basic';

export interface IAutoMultiQueueItem {
  resolve(data: unknown): void;
  reject(err: Error): void;
}

export interface IAutoMultiOptions {
  /**
   * 默认用 FetcherConfig._id，也可以自己指定（不推荐自己指定）
   */
  key?: string;
}

export interface IAutoMultiOptionsParsed extends Required<IAutoMultiOptions> {}

export interface IFetcherConfigExtra {
  /**
   * 默认，请求在 _id（见 @alicloud/fetcher）相同的情况下，如果同一时间内，有相同 _id 的请求
   */
  merger?: boolean | null | IAutoMultiOptions;
}

export interface IFetcherConfigExtended extends FetcherConfig, IFetcherConfigExtra {}

/**
 * request 里会把 merger 局限成 null | IAutoMultiOptions
 */
export interface IFetcherConfigExtendedForResponse extends FetcherConfig {
  merger?: null | IAutoMultiOptionsParsed;
}
