"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeOnBeforeSend;

function mergeOnBeforeSend(factoryOnBeforeSend, onBeforeSend) {
  if (!factoryOnBeforeSend || !onBeforeSend) {
    return onBeforeSend || factoryOnBeforeSend;
  }

  return function (options) {
    if (factoryOnBeforeSend(options) === false) {
      return false;
    }

    return onBeforeSend(options);
  };
}