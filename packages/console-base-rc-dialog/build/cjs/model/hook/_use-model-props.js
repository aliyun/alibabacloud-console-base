"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useModelProps;

var _useModelContext2 = _interopRequireDefault(require("./_use-model-context"));

/**
 * 返回 PROPS
 */
function useModelProps() {
  var _useModelContext = (0, _useModelContext2.default)(),
      PROPS = _useModelContext.PROPS;

  return PROPS;
}