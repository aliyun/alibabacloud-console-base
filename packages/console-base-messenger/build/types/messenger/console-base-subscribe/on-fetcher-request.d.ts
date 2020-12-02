/**
 * console-base 响应接口统一请求
 */
export default function onFetcherRequest<T = void, P = unknown>(fn: (payload: P) => Promise<T>): () => void;
