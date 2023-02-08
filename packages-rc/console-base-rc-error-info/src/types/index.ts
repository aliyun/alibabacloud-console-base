import {
  HTMLAttributes
} from 'react';

/**
 * 开发期间（或强制 detailedMode 时）可以通过它展示更多的信息，同时它也是日志需要的重要信息，
 * 使用 fetcher 的话，不需要传，这里有处理的逻辑
 */
export interface IErrorDetails {
  url?: string;
  method?: string;
  params?: string | Record<string, unknown> | null;
  body?: string | Record<string, unknown> | null;
  // 其他
  [k: string]: unknown;
}

/**
 * 从 `FetcherError responseData.accessDeniedDetail` 提取
 */
export interface IErrorDetailsAuth {
  action?: string;
  resource?: string;
  userId?: string;
  userName?: string;
  userType?: 'SubUser' | 'AssumedRoleUser';
  policyType?: string;
  type?: 'ExplicitDeny' | 'ImplicitDeny';
}

/**
 * 标准化后的纯对象，可以安全用于 postMessage 等场景，因为 Error 对象不可用在 postMessage 里边，会报错：
 *
 * 「Uncaught DOMException: The object could not be cloned.」
 */
export interface IErrorPlain {
  name?: string;
  message: string;
  title?: string;
  code?: string;
  requestId?: string;
  stack?: string;
  details?: IErrorDetails;
  detailsAuth?: IErrorDetailsAuth;
}

/**
 * 展示用的 k-v 对
 */
export interface IErrorDetailKv {
  k0: string;
  k: string;
  v: unknown;
}

export interface IErrorInfoDisplayOptions {
  messageShouldShow?: boolean;
  detailedMode?: boolean;
}

export interface IErrorInfoProps extends IErrorInfoDisplayOptions, HTMLAttributes<HTMLDivElement> {
  error: IErrorPlain;
  foldable?: boolean;
  folded?: boolean;
  defaultFolded?: boolean;
  onFoldedChange?(folded: boolean): void;
}