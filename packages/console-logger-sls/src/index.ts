import {
  FactoryOptions,
  FactoryFn,
  LogFn
} from '@alicloud/logger-sls';

import factory from './_factory';
import chooseStoreByEnv from './_choose-store-by-env';

export default factory;

export {
  chooseStoreByEnv
};

export type {
  FactoryOptions,
  FactoryFn,
  LogFn
};
