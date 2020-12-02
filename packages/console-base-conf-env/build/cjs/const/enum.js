"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EEnv = void 0;

/**
 * 环境枚举，互斥
 */
var EEnv;
exports.EEnv = EEnv;

(function (EEnv) {
  EEnv["DEV"] = "dev";
  EEnv["DAILY"] = "daily";
  EEnv["PRE"] = "pre";
  EEnv["PROD"] = "prod";
})(EEnv || (exports.EEnv = EEnv = {}));