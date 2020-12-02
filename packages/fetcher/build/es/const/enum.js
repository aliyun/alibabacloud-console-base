// 特殊错误，会被 fetcher 处理，不需要对外暴露
export var EErrorSpecial;

(function (EErrorSpecial) {
  EErrorSpecial["SKIP_NETWORK"] = "FetcherError:SkipNetwork";
})(EErrorSpecial || (EErrorSpecial = {}));