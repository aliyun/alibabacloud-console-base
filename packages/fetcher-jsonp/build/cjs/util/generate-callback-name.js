"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateCallbackName;
var index = 1;

function generateCallbackName() {
  index += 1;
  return ['fetcher_jsonp', index, Date.now(), Math.ceil(Math.random() * 100000)].join('_');
}