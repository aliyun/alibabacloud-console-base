"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "EDialogMode", {
  enumerable: true,
  get: function get() {
    return _const.EDialogMode;
  }
});
Object.defineProperty(exports, "EDialogSize", {
  enumerable: true,
  get: function get() {
    return _const.EDialogSize;
  }
});
Object.defineProperty(exports, "DialogContext", {
  enumerable: true,
  get: function get() {
    return _model.Context;
  }
});
Object.defineProperty(exports, "useDialog", {
  enumerable: true,
  get: function get() {
    return _model.useDialog;
  }
});
Object.defineProperty(exports, "AltWrap", {
  enumerable: true,
  get: function get() {
    return _altWrap.default;
  }
});
Object.defineProperty(exports, "openIndirect", {
  enumerable: true,
  get: function get() {
    return _openIndirect.default;
  }
});
Object.defineProperty(exports, "open", {
  enumerable: true,
  get: function get() {
    return _open.default;
  }
});
Object.defineProperty(exports, "slide", {
  enumerable: true,
  get: function get() {
    return _open.slide;
  }
});
Object.defineProperty(exports, "slideUp", {
  enumerable: true,
  get: function get() {
    return _open.slideUp;
  }
});
Object.defineProperty(exports, "alert", {
  enumerable: true,
  get: function get() {
    return _alt.alert;
  }
});
Object.defineProperty(exports, "confirm", {
  enumerable: true,
  get: function get() {
    return _alt.confirm;
  }
});
Object.defineProperty(exports, "prompt", {
  enumerable: true,
  get: function get() {
    return _alt.prompt;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _rcContainer.default;
  }
});

var _const = require("./const");

var _model = require("./model");

var _altWrap = _interopRequireDefault(require("./rc/alt-wrap"));

var _openIndirect = _interopRequireDefault(require("./promised/open-indirect"));

var _open = _interopRequireWildcard(require("./promised/open"));

var _alt = require("./promised/alt");

var _rcContainer = _interopRequireDefault(require("./rc-container"));