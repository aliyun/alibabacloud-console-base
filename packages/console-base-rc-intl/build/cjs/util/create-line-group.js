"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createLineGroup;

var _const = require("../const");

function createLineGroup(type, items) {
  switch (type) {
    case _const.ETypeLine.OL:
      return {
        type: type,
        items: items.map(function (v) {
          return v.replace(_const.REG_OL, '');
        })
      };

    case _const.ETypeLine.UL:
      return {
        type: type,
        items: items.map(function (v) {
          return v.replace(_const.REG_UL, '');
        })
      };

    case _const.ETypeLine.HR:
      return {
        type: type,
        items: []
      };

    default:
      return {
        type: type,
        items: items
      };
  }
}