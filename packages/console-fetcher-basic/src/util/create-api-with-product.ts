import {
  IConsoleApiOptions,
  IFnConsoleApi,
  IFnConsoleApiWithProduct
} from '../types';

/**
 * 辅助方法，用于输出不需要写 product 的 Open/Inner/Container API
 */
export default function createApiWithProduct<D = never>(fn: IFnConsoleApi, product: string, defaultParams?: D, defaultOptions?: IConsoleApiOptions): IFnConsoleApiWithProduct {
  return <T = void, P = unknown>(action: string, params?: P, options?: IConsoleApiOptions): Promise<T> => fn(product, action, defaultParams ? {
    ...defaultParams,
    ...params
  } : params, defaultOptions ? {
    ...defaultOptions,
    ...options
  } : options);
}