"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCode;

function getCode(json, codeGetter) {
  if (typeof codeGetter === 'function') {
    return codeGetter(json);
  }

  if (typeof codeGetter === 'string') {
    return json[codeGetter];
  }

  return json.code;
}