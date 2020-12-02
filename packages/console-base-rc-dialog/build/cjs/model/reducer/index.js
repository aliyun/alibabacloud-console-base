"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _const = require("../const");

var _reduceDidMount = _interopRequireDefault(require("./reduce-did-mount"));

var _reduceActive = _interopRequireDefault(require("./reduce-active"));

var _reduceSetZIndex = _interopRequireDefault(require("./reduce-set-z-index"));

var _reduceLock = _interopRequireDefault(require("./reduce-lock"));

var _reduceUnlock = _interopRequireDefault(require("./reduce-unlock"));

var _reduceUpdateProps = _interopRequireDefault(require("./reduce-update-props"));

var _reduceUpdateData = _interopRequireDefault(require("./reduce-update-data"));

var _reduceForceUpdate = _interopRequireDefault(require("./reduce-force-update"));

var _reduceUpdateWindowHeight = _interopRequireDefault(require("./reduce-update-window-height"));

function reducer(state, action) {
  switch (action.type) {
    case _const.EAction.DID_MOUNT:
      return (0, _reduceDidMount.default)(state);

    case _const.EAction.ACTIVATE:
      return (0, _reduceActive.default)(state, true);

    case _const.EAction.DEACTIVATE:
      return (0, _reduceActive.default)(state, false);

    case _const.EAction.SET_Z_INDEX:
      return (0, _reduceSetZIndex.default)(state, action.payload);

    case _const.EAction.LOCK:
      return (0, _reduceLock.default)(state, action.payload);

    case _const.EAction.UNLOCK:
      return (0, _reduceUnlock.default)(state);

    case _const.EAction.UPDATE_PROPS:
      return (0, _reduceUpdateProps.default)(state, action.payload);

    case _const.EAction.UPDATE_DATA:
      return (0, _reduceUpdateData.default)(state, action.payload);

    case _const.EAction.FORCE_UPDATE:
      return (0, _reduceForceUpdate.default)(state);

    case _const.EAction.UPDATE_WINDOW_HEIGHT:
      return (0, _reduceUpdateWindowHeight.default)(state);

    default:
      return state;
  }
}