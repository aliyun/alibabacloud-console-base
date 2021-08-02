export { default } from './factory/create-logger';
export { default as createLoggerFactory } from './factory/create-factory';

export type {
  IFactoryOptions as FactoryOptions,
  IFnFactory as FactoryFn,
  IFnLog as LogFn,
  ILogOptions as LogOptions,
  ILogOptionsQuick as LogOptionsQuick
} from './types';
