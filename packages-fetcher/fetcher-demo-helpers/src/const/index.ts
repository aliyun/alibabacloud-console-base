const MOCK_PREFIX = 'https://oneapi.alibaba-inc.com/mock/boshit';

export const URLS = {
  SUCCESS: `${MOCK_PREFIX}/success`,
  SUCCESS_PARAM_SHALL_BE_MERGED_TRUE: `${MOCK_PREFIX}/success?param_shall_be_merged=true`,
  SUCCESS_CUSTOM: `${MOCK_PREFIX}/success-custom`,
  RISK: `${MOCK_PREFIX}/risk`,
  RAM_FORBIDDEN: `${MOCK_PREFIX}/ram-forbidden`,
  FAIL: `${MOCK_PREFIX}/fail`,
  FAIL_CUSTOM: `${MOCK_PREFIX}/fail-custom`,
  TIMEOUT: `${MOCK_PREFIX}/timeout`,
  INVALID: '//non-existed-site', // invalid
  INVALID_NOT_JSON: `//${location.host}` // not json
};

export const SLS_CONFIG = { // 用 console-base 的 dev store 来做 SLS 上报的相关测试
  project: 'console-base',
  endpoint: 'log-global.aliyuncs.com',
  logstore: 'dev',
  topicError: 'test_api_error'
};
