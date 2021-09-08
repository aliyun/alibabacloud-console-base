import createLogger from '@alicloud/console-logger-sls';

import getOptions from './util/get-options';

// export 出去，在 console-base-fetcher 里会用到
export const SLS_OPTIONS = getOptions();

/**
 * console-base 专用 logger
 */
export default createLogger(SLS_OPTIONS);

export * from '@alicloud/console-logger-sls';
