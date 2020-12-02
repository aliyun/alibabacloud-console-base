"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SLS_CONFIG = exports.URLS = exports.ELoadingStatus = void 0;
var MOCK_PREFIX = 'https://mocks.alibaba-inc.com/mock/boshit';
var ELoadingStatus;
exports.ELoadingStatus = ELoadingStatus;

(function (ELoadingStatus) {
  ELoadingStatus[ELoadingStatus["IDLE"] = 0] = "IDLE";
  ELoadingStatus[ELoadingStatus["LOADING"] = 1] = "LOADING";
  ELoadingStatus[ELoadingStatus["SUCCESS"] = 2] = "SUCCESS";
  ELoadingStatus[ELoadingStatus["ERROR"] = 3] = "ERROR";
})(ELoadingStatus || (exports.ELoadingStatus = ELoadingStatus = {}));

var URLS = ["".concat(MOCK_PREFIX, "/success"), "".concat(MOCK_PREFIX, "/success?param_shall_be_merged=true"), "".concat(MOCK_PREFIX, "/success-custom"), "".concat(MOCK_PREFIX, "/risk"), "".concat(MOCK_PREFIX, "/fail"), "".concat(MOCK_PREFIX, "/fail-custom"), "".concat(MOCK_PREFIX, "/timeout"), '//non-existed-site', // invalid
"//".concat(location.host) // not json
];
exports.URLS = URLS;
var SLS_CONFIG = {
  // 用 console-base 的 dev store 来做 SLS 上报的相关测试
  project: 'console-base',
  endpoint: 'log-global.aliyuncs.com',
  logstore: 'dev',
  topicError: 'test_api_error'
};
exports.SLS_CONFIG = SLS_CONFIG;