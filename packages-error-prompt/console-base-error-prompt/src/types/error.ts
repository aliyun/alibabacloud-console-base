export interface IFetcherErrorMimicConfig {
  url?: string;
  method?: string;
  params?: string | Record<string, unknown> | null;
  body?: string | Record<string, unknown> | null;
}

/**
 * 对接 RAM 的接口后端会给出的详情
 */
export interface IFetcherErrorMimicAuthDetails {
  AuthAction?: string;
  AuthResource?: string;
  AuthPrincipalType?: 'SubUser' | 'AssumedRoleUser';
  AuthPrincipalDisplayName?: string;
  AuthPrincipalOwnerId?: string;
  PolicyType?: string; // 不需要国际化
  NoPermissionType?: 'ExplicitDeny' | 'ImplicitDeny';
}

/**
 * FetcherError 的仿影，不引用，是为了避免不不要的依赖
 */
export interface IFetcherErrorMimic {
  config?: IFetcherErrorMimicConfig;
  responseData?: {
    accessDeniedDetail?: IFetcherErrorMimicAuthDetails;
  };
}

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
  userType?: IFetcherErrorMimicAuthDetails['AuthPrincipalType'];
  userName?: string;
  userId?: string;
  policyType?: string;
  type?: IFetcherErrorMimicAuthDetails['NoPermissionType'];
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

export interface IError extends Error, Omit<IErrorPlain, 'name' | 'message' | 'stack'> {}