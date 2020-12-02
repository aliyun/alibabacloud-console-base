import { TDefaultParams, TFnOnBeforeSend, TFnFactory } from '../types';
/**
 * 创建 `createLogger` 方法的方法，对期望扩展默认参数的场景做了规范。
 *
 * 一般不会在项目中直接使用，而是用它来生成一个 npm 包。
 */
export default function createFactory(factoryDefaultParams: TDefaultParams, factoryOnBeforeSend?: TFnOnBeforeSend): TFnFactory;
