import createLogger from '@alicloud/console-logger-sls';

import {
  getSlsOptions,
  getSlsOptionsForRam
} from './util';

export * from '@alicloud/console-logger-sls';

// FIXME: 这个包的全部实现应迁移回到 @ali 域

// export 出去，在 console-base-fetcher 里会用到
export const SLS_OPTIONS = getSlsOptions();
export const SLS_OPTIONS_FOR_RAM = getSlsOptionsForRam();

export const logToDefaultSls = createLogger(SLS_OPTIONS);

// 仅用于 RAM 相关业务数据采集
export const logToRamSls = createLogger(SLS_OPTIONS_FOR_RAM);
export const SLS_TOPIC_FOR_RAM = 'console-base';

export default logToDefaultSls;
