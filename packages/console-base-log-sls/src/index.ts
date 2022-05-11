import createLogger from '@alicloud/console-logger-sls';

import {
  getSlsOptions
} from './util';

export * from '@alicloud/console-logger-sls';

// export 出去，在 console-base-fetcher 里会用到
export const SLS_OPTIONS = getSlsOptions();

/**
 * console-base 专用 logger TODO 这个包要迁回 @ali
 */
export default createLogger(SLS_OPTIONS);
