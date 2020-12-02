/**
 * 环境枚举，互斥
 */
export var EEnv;

(function (EEnv) {
  EEnv["DEV"] = "dev";
  EEnv["DAILY"] = "daily";
  EEnv["PRE"] = "pre";
  EEnv["PROD"] = "prod";
})(EEnv || (EEnv = {}));