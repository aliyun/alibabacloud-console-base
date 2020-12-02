"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getContextProps;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _const = require("../../const");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getContextProps(propps, propsUpdate) {
  var _finalProps$mode, _finalProps$backdrop, _finalProps$esc, _finalProps$closable, _finalProps$zIndex, _finalProps$zIndexBac;

  var finalProps = _objectSpread(_objectSpread({}, propps), propsUpdate);

  finalProps.mode = (_finalProps$mode = finalProps.mode) !== null && _finalProps$mode !== void 0 ? _finalProps$mode : _const.EDialogMode.NORMAL;
  finalProps.backdrop = (_finalProps$backdrop = finalProps.backdrop) !== null && _finalProps$backdrop !== void 0 ? _finalProps$backdrop : true;
  finalProps.esc = (_finalProps$esc = finalProps.esc) !== null && _finalProps$esc !== void 0 ? _finalProps$esc : true;
  finalProps.closable = (_finalProps$closable = finalProps.closable) !== null && _finalProps$closable !== void 0 ? _finalProps$closable : true;
  finalProps.zIndex = (_finalProps$zIndex = finalProps.zIndex) !== null && _finalProps$zIndex !== void 0 ? _finalProps$zIndex : finalProps.mode === _const.EDialogMode.SLIDE ? _consoleBaseStyledMixin.Z_INDEX.DIALOG_SLIDE : _consoleBaseStyledMixin.Z_INDEX.DIALOG_NORMAL;
  finalProps.zIndexBackdrop = (_finalProps$zIndexBac = finalProps.zIndexBackdrop) !== null && _finalProps$zIndexBac !== void 0 ? _finalProps$zIndexBac : finalProps.mode === _const.EDialogMode.SLIDE ? _consoleBaseStyledMixin.Z_INDEX.BACKDROP_SLIDE : _consoleBaseStyledMixin.Z_INDEX.BACKDROP_NORMAL;
  return finalProps;
}