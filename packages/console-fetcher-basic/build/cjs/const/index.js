"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETypeApiMulti = exports.ETypeApi = void 0;
var ETypeApi;
exports.ETypeApi = ETypeApi;

(function (ETypeApi) {
  ETypeApi[ETypeApi["OPEN"] = 0] = "OPEN";
  ETypeApi[ETypeApi["INNER"] = 1] = "INNER";
  ETypeApi[ETypeApi["CONTAINER"] = 2] = "CONTAINER";
})(ETypeApi || (exports.ETypeApi = ETypeApi = {}));

var ETypeApiMulti;
exports.ETypeApiMulti = ETypeApiMulti;

(function (ETypeApiMulti) {
  ETypeApiMulti[ETypeApiMulti["OPEN"] = 100] = "OPEN";
})(ETypeApiMulti || (exports.ETypeApiMulti = ETypeApiMulti = {}));