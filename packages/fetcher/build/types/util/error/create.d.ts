import { IFetcherConfig, IFetcherError } from '../../types';
/**
 * 创建 FetcherError 它一定得有 config 属性
 */
export default function createError<C extends IFetcherConfig = IFetcherConfig>(config: C, name: string, message?: string, code?: string): IFetcherError<C>;
