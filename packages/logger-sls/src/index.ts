import createLogger from './factory/create-logger';

export default createLogger;
export { default as createLoggerFactory } from './factory/create-factory';

export type {
  IFactoryOptions as FactoryOptions,
  TFnFactory as FactoryFn,
  IFnLog as LogFn
} from './types';
