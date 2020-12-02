import { IFetcherConfig } from '../types';
/**
 * 将多个 config 进行合并
 */
export default function mergeConfig<C extends IFetcherConfig = IFetcherConfig>(config: C, ...args: Partial<C>[]): C;
