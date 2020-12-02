"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REG_HR = exports.REG_UL = exports.REG_OL = void 0;
var REG_OL = /^\s*\d+\. /;
exports.REG_OL = REG_OL;
var REG_UL = /^\s*\* /;
exports.REG_UL = REG_UL;
var REG_HR = /^\s*-{3,}\s*$/;
exports.REG_HR = REG_HR;