import {
  IIntlFactoryOptions as IntlFactoryOptions,
  IIntlInstructions as IntlInstructions,
  IFnIntl as FnIntl
} from './types';

export * from '@alicloud/console-base-intl-factory-basic';

export {
  default
} from './util/factory';

export type {
  FnIntl,
  IntlInstructions,
  IntlFactoryOptions
};
