"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useIsUnmounted;

var _react = require("react");

function useIsUnmounted() {
  var ref = (0, _react.useRef)(false);
  var isMounted = (0, _react.useCallback)(function () {
    return ref.current;
  }, []);
  (0, _react.useEffect)(function () {
    return function () {
      ref.current = true;
    };
  }, []);
  return isMounted;
}