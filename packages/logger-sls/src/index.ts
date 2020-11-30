import {
  IFactoryOptions as FactoryOptions,
  TFnFactory as FactoryFn,
  IFnLog as LogFn
} from './types';
import createLogger from './factory/create-logger';
import createLoggerFactory from './factory/create-factory';

export default createLogger;

export type {
  FactoryOptions,
  FactoryFn,
  LogFn
};

export {
  createLoggerFactory
};
