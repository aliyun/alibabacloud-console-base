import {
  TDefaultParams,
  IFactoryOptions,
  TFnOnBeforeSend,
  IFnFactory
} from '../types';
import {
  mergeDefaultParams,
  mergeOnBeforeSend
} from '../util';
import createLogger from '../factory/create-logger';

/**
 * 创建 `createLogger` 方法的方法，对期望扩展默认参数的场景做了规范。
 *
 * 一般不会在项目中直接使用，而是用它来生成一个 npm 包。
 */
export default function createLoggerFactory(factoryDefaultParams: TDefaultParams, factoryOnBeforeSend?: TFnOnBeforeSend): IFnFactory {
  return ({
    defaultParams,
    onBeforeSend,
    ...options
  }: IFactoryOptions) => {
    return createLogger({
      ...options,
      defaultParams: mergeDefaultParams(factoryDefaultParams, defaultParams),
      onBeforeSend: mergeOnBeforeSend(factoryOnBeforeSend, onBeforeSend)
    });
  };
}
