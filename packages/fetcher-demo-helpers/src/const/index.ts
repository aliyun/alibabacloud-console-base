const MOCK_PREFIX = 'https://mocks.alibaba-inc.com/mock/boshit';

export enum ELoadingStatus {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR
}

export const URLS = [
  `${MOCK_PREFIX}/success`,
  `${MOCK_PREFIX}/success?param_shall_be_merged=true`,
  `${MOCK_PREFIX}/success-custom`,
  `${MOCK_PREFIX}/risk`,
  `${MOCK_PREFIX}/fail`,
  `${MOCK_PREFIX}/fail-custom`,
  `${MOCK_PREFIX}/timeout`,
  '//non-existed-site', // invalid
  `//${location.host}` // not json
];

export const SLS_CONFIG = { // 用 console-base 的 dev store 来做 SLS 上报的相关测试
  project: 'console-base',
  endpoint: 'log-global.aliyuncs.com',
  logstore: 'dev',
  topicError: 'test_api_error'
};
