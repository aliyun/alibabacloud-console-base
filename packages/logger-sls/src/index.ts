export { default } from './factory/create-logger';
export { default as createLoggerFactory } from './factory/create-factory';
export { default as flattenObject } from './helper/flatten-object';

export type {
  IFactoryOptions as FactoryOptions,
  IFnFactory as FactoryFn,
  IFnLog as LogFn,
  ILogOptions as LogOptions,
  ILogOptionsQuick as LogOptionsQuick
} from './types';
