"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDialogStackItem;

var _useModelProps2 = _interopRequireDefault(require("./_use-model-props"));

var _useRefDialog = _interopRequireDefault(require("./use-ref-dialog"));

var _useRefContent = _interopRequireDefault(require("./use-ref-content"));

var _useDispatchSetZIndex = _interopRequireDefault(require("./use-dispatch-set-z-index"));

var _useDispatchCloseOnEcs = _interopRequireDefault(require("./use-dispatch-close-on-ecs"));

var _useDispatchCloseOnExternal = _interopRequireDefault(require("./use-dispatch-close-on-external"));

function useDialogStackItem() {
  var refDialog = (0, _useRefDialog.default)();
  var refContent = (0, _useRefContent.default)();

  var _useModelProps = (0, _useModelProps2.default)(),
      backdrop = _useModelProps.backdrop,
      zIndex = _useModelProps.zIndex,
      zIndexBackdrop = _useModelProps.zIndexBackdrop;

  var dispatchSetZIndex = (0, _useDispatchSetZIndex.default)();
  var dispatchCloseOnEsc = (0, _useDispatchCloseOnEcs.default)();
  var dispatchCloseOnExternal = (0, _useDispatchCloseOnExternal.default)();
  return {
    backdrop: backdrop,
    zIndex: zIndex,
    zIndexBackdrop: zIndexBackdrop,
    domDialog: refDialog.current,
    domDialogContent: refContent.current,
    dispatchSetZIndex: dispatchSetZIndex,
    dispatchCloseOnEsc: dispatchCloseOnEsc,
    dispatchCloseOnExternal: dispatchCloseOnExternal
  };
}