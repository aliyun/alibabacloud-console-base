"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createError;

function createError(name, message) {
  var error = new Error(message);
  error.name = name; // Error 对象的默认 name 是 'Error'

  return error;
}