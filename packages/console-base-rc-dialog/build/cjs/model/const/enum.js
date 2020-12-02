"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EDialogFocusHow = exports.EAction = void 0;
var EAction;
exports.EAction = EAction;

(function (EAction) {
  EAction[EAction["DID_MOUNT"] = 0] = "DID_MOUNT";
  EAction[EAction["ACTIVATE"] = 1] = "ACTIVATE";
  EAction[EAction["DEACTIVATE"] = 2] = "DEACTIVATE";
  EAction[EAction["LOCK"] = 3] = "LOCK";
  EAction[EAction["UNLOCK"] = 4] = "UNLOCK";
  EAction[EAction["UPDATE_PROPS"] = 5] = "UPDATE_PROPS";
  EAction[EAction["UPDATE_DATA"] = 6] = "UPDATE_DATA";
  EAction[EAction["SET_Z_INDEX"] = 7] = "SET_Z_INDEX";
  EAction[EAction["UPDATE_WINDOW_HEIGHT"] = 8] = "UPDATE_WINDOW_HEIGHT";
  EAction[EAction["FORCE_UPDATE"] = 9] = "FORCE_UPDATE";
})(EAction || (exports.EAction = EAction = {}));

var EDialogFocusHow;
exports.EDialogFocusHow = EDialogFocusHow;

(function (EDialogFocusHow) {
  EDialogFocusHow[EDialogFocusHow["AUTO"] = 0] = "AUTO";
  EDialogFocusHow[EDialogFocusHow["NEXT"] = 1] = "NEXT";
  EDialogFocusHow[EDialogFocusHow["PREV"] = 2] = "PREV";
})(EDialogFocusHow || (exports.EDialogFocusHow = EDialogFocusHow = {}));