import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { isValidElement } from 'react';

/**
 * 为了使用上的便利性，你可以仅传入内容（string 或 JSX.Element），这个方法是判断并返回 `{ content }` 对象
 */
function fromContentOrProps(contentOrProps) {
  if (!contentOrProps) {
    return {};
  }

  if (typeof contentOrProps === 'string' || /*#__PURE__*/isValidElement(contentOrProps)) {
    return {
      content: contentOrProps
    };
  }

  return contentOrProps; // isValidElement cannot guard
}
/**
 * promise dialog 需要的 props
 */


export default function buildPropsForPromise(contentOrProps, fixedProps, defaultProps) {
  var props = fromContentOrProps(contentOrProps);
  return _objectSpread(_objectSpread(_objectSpread({}, defaultProps), props), fixedProps);
}