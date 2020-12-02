import { IFetcher, IFetcherConfig } from '../types';
/**
 * 这里会创建 Fetcher 实例，但不会直接把实例返回，因为那样的话用起来会不舒服（方法无法脱离实例进行调用），
 * 所以这里实际上是返回了一组方法组合成的一个对象。
 */
export default function createFetcher<C extends IFetcherConfig = IFetcherConfig>(config?: C): IFetcher<C>;
