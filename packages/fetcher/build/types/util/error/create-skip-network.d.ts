import { IFetcherConfig, IFetcherErrorSpecial } from '../../types';
/**
 * 创建一个特殊的错误，它将被用于请求拦截器中，如果请求拦截器抛出此错误，则请求也不会被执行，跟其他的错误不同的是，
 * Fetcher 会从这个错误中获取 result 并以它作为最终的返回结果。
 *
 * 它的作用场景：
 *
 * 1. 如果应用有缓存好已经获得到的结果，则直接返回结果
 * 2. 如果应用需要合并接口请求，则直接返回合并前的临时 Promise
 */
export default function createSkipNetwork<T = void, C extends IFetcherConfig = IFetcherConfig>(result?: T | Promise<T>, config?: C): IFetcherErrorSpecial<T>;
