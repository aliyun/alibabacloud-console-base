"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMessage;

function getMessage(json, messageGetter) {
  if (typeof messageGetter === 'function') {
    return messageGetter(json);
  }

  if (typeof messageGetter === 'string') {
    return json[messageGetter];
  }

  return json.message;
}