"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EErrorSpecial = void 0;
// 特殊错误，会被 fetcher 处理，不需要对外暴露
var EErrorSpecial;
exports.EErrorSpecial = EErrorSpecial;

(function (EErrorSpecial) {
  EErrorSpecial["SKIP_NETWORK"] = "FetcherError:SkipNetwork";
})(EErrorSpecial || (exports.EErrorSpecial = EErrorSpecial = {}));