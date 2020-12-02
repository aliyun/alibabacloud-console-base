import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { isValidElement } from 'react';
import { EDialogLockState } from '../const';
/**
 * 为了方便使用，button 被设计为可以传入 string | JSX.Element | IDialogButtonProps，但最终使用的时候还是要转成 IDialogButtonProps
 */

function normalizeButton(button) {
  if (typeof button === 'string' || /*#__PURE__*/isValidElement(button)) {
    return {
      label: button
    };
  }

  return _objectSpread({}, button);
}
/**
 * 获得最终用于展示的按钮 props
 */


export default function processButtons() {
  var buttons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var locked = arguments.length > 1 ? arguments[1] : undefined;
  var hasPrimary = false;
  var buttonAttr = buttons.reduce(function (reduced, v, i) {
    if (!v) {
      // 去掉 null 等
      return reduced;
    }

    var buttonProps = normalizeButton(v);
    buttonProps.spm = buttonProps.spm || "".concat(i); // 保证 spm 一定存在

    if (buttonProps.primary) {
      hasPrimary = true;
    }

    reduced.push(buttonProps);
    return reduced;
  }, []);

  if (!hasPrimary && buttonAttr.length > 1) {
    buttonAttr[0].primary = true;
  }

  if (locked !== EDialogLockState.NO) {
    buttonAttr.forEach(function (v) {
      v.disabled = true;

      if (locked === EDialogLockState.LOADING && v.primary) {
        v.loading = true;
      }
    });
  }

  return buttonAttr;
}