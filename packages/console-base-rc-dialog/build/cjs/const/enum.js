"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EDialogLockState = exports.EDialogSize = exports.EDialogMode = void 0;
var EDialogMode;
exports.EDialogMode = EDialogMode;

(function (EDialogMode) {
  EDialogMode["NORMAL"] = "normal";
  EDialogMode["SLIDE"] = "slide";
  EDialogMode["SLIDE_UP"] = "slide_up";
})(EDialogMode || (exports.EDialogMode = EDialogMode = {}));

var EDialogSize;
exports.EDialogSize = EDialogSize;

(function (EDialogSize) {
  EDialogSize["XS"] = "xs";
  EDialogSize["S"] = "s";
  EDialogSize["M"] = "m";
  EDialogSize["L"] = "l";
  EDialogSize["XL"] = "xl";
  EDialogSize["XXL"] = "xxl";
  EDialogSize["AUTO"] = "auto";
  EDialogSize["ALMOST_FULL"] = "almost-full";
})(EDialogSize || (exports.EDialogSize = EDialogSize = {}));

var EDialogLockState;
exports.EDialogLockState = EDialogLockState;

(function (EDialogLockState) {
  EDialogLockState[EDialogLockState["NO"] = 0] = "NO";
  EDialogLockState[EDialogLockState["YES"] = 1] = "YES";
  EDialogLockState[EDialogLockState["LOADING"] = 2] = "LOADING";
})(EDialogLockState || (exports.EDialogLockState = EDialogLockState = {}));