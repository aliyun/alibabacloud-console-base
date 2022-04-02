import {
  IConsoleApiOptions,
  IFnConsoleApi,
  IFnConsoleApiWithProduct
} from '../types';

/**
 * 辅助方法，用于输出不需要写 product 的 Open/Inner/Container API
 */
export default function createApiWithProduct(fn: IFnConsoleApi, product: string): IFnConsoleApiWithProduct {
  return <T = void, P = unknown>(action: string, params?: P, options?: IConsoleApiOptions): Promise<T> => fn(product, action, params, options);
}