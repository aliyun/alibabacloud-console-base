// 特殊错误，会被 fetcher 处理，不需要对外暴露
export enum EErrorSpecial {
  SKIP_NETWORK = 'FetcherError:SkipNetwork' // 跳过网络请求和响应拦截器，直接到最末
}
