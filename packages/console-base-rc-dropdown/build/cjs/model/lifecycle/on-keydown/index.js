"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OnKeydown;

var _react = require("react");

var _hook = require("../../hook");

function OnKeydown() {
  var _useProps = (0, _hook.useProps)(),
      onEsc = _useProps.onEsc,
      onNavUp = _useProps.onNavUp,
      onNavDown = _useProps.onNavDown;

  var visibleFinal = (0, _hook.useVisible)();
  var dispatchToggleVisible = (0, _hook.useDispatchToggleVisible)();
  var handleDocKeyDown = (0, _react.useCallback)(function (e) {
    switch (e.key) {
      case 'Escape':
        dispatchToggleVisible(false);

        if (onEsc) {
          onEsc();
        }

        break;

      case 'ArrowDown':
        if (onNavDown) {
          e.preventDefault();
          onNavDown();
        }

        break;

      case 'ArrowUp':
        if (onNavUp) {
          e.preventDefault();
          onNavUp();
        }

        break;

      default:
        break;
    }
  }, [dispatchToggleVisible, onEsc, onNavUp, onNavDown]);
  (0, _react.useEffect)(function () {
    if (visibleFinal) {
      document.addEventListener('keydown', handleDocKeyDown);
    }

    return function () {
      return document.removeEventListener('keydown', handleDocKeyDown);
    };
  }, [visibleFinal, handleDocKeyDown]);
  return null;
}