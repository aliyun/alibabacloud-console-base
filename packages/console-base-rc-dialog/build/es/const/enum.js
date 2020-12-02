export var EDialogMode;

(function (EDialogMode) {
  EDialogMode["NORMAL"] = "normal";
  EDialogMode["SLIDE"] = "slide";
  EDialogMode["SLIDE_UP"] = "slide_up";
})(EDialogMode || (EDialogMode = {}));

export var EDialogSize;

(function (EDialogSize) {
  EDialogSize["XS"] = "xs";
  EDialogSize["S"] = "s";
  EDialogSize["M"] = "m";
  EDialogSize["L"] = "l";
  EDialogSize["XL"] = "xl";
  EDialogSize["XXL"] = "xxl";
  EDialogSize["AUTO"] = "auto";
  EDialogSize["ALMOST_FULL"] = "almost-full";
})(EDialogSize || (EDialogSize = {}));

export var EDialogLockState;

(function (EDialogLockState) {
  EDialogLockState[EDialogLockState["NO"] = 0] = "NO";
  EDialogLockState[EDialogLockState["YES"] = 1] = "YES";
  EDialogLockState[EDialogLockState["LOADING"] = 2] = "LOADING";
})(EDialogLockState || (EDialogLockState = {}));