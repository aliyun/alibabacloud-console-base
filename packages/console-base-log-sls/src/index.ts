import createLogger from '@alicloud/console-logger-sls';

import getOptions from './util/get-options';

export * from '@alicloud/console-logger-sls';

// export 出去，在 console-base-fetcher 里会用到
export const SLS_OPTIONS = getOptions();

/**
 * console-base 专用 logger TODO 这个包要迁回 @ali
 */
export default createLogger(SLS_OPTIONS);
