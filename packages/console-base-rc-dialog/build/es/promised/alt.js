import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import { Z_INDEX } from '@alicloud/console-base-styled-mixin';
import { EDialogMode } from '../const';
import intl from '../intl';
import buildPropsForPromise from '../util/build-props-for-promise';
import AltWrap from '../rc/alt-wrap';
import open from './open';
import PromptContent from './prompt-content';

/**
 * 系统级 Dialog 共享的不可覆盖 props
 */
var COMMON_PROPS = {
  mode: EDialogMode.NORMAL,
  backdrop: true,
  zIndex: Z_INDEX.DIALOG_SYS,
  zIndexBackdrop: Z_INDEX.BACKDROP_SYS,
  esc: -1
};
/**
 * 系统 window.alert 的替代
 *
 * ```typescript
 * alert('some message').then(...);
 * alert(<Content />).then(...);
 * alert({
 *   title: 'some title',
 *   content: 'message',
 * }, {
 *   ok: 自定义 OK 按钮文案
 * }).then(...);
 *
 * // 也可以用 async-await
 * await alert(...);
 * ```
 */

export function alert(contentOrProps) {
  var _extra$ok;

  var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var promiseProps = buildPropsForPromise(contentOrProps, _objectSpread({
    buttons: [{
      spm: 'ok',
      label: (_extra$ok = extra.ok) !== null && _extra$ok !== void 0 ? _extra$ok : intl('op:ok'),
      primary: true
    }]
  }, COMMON_PROPS));
  promiseProps.content = /*#__PURE__*/React.createElement(AltWrap, {
    type: 'alert',
    title: promiseProps.title,
    content: promiseProps.content
  });
  delete promiseProps.title;
  return open(promiseProps);
}
/**
 * 系统 window.confirm 的替代
 *
 * ```
 * import {
 *   confirm
 * } from '@alicloud/console-base-rc-dialog';
 *
 * confirm(...).then(yes => {
 *   ...
 * });
 *
 * // 也可以用 async-await
 * const yes = await alert(...);
 * ```
 */

export function confirm(contentOrProps) {
  var _extra$ok2, _extra$cancel;

  var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var promiseProps = buildPropsForPromise(contentOrProps, _objectSpread({
    buttons: [{
      spm: 'ok',
      label: (_extra$ok2 = extra.ok) !== null && _extra$ok2 !== void 0 ? _extra$ok2 : intl('op:ok'),
      result: true
    }, {
      spm: 'cancel',
      label: (_extra$cancel = extra.cancel) !== null && _extra$cancel !== void 0 ? _extra$cancel : intl('op:cancel')
    }]
  }, COMMON_PROPS));
  promiseProps.content = /*#__PURE__*/React.createElement(AltWrap, {
    type: 'confirm',
    title: promiseProps.title,
    content: promiseProps.content
  });
  delete promiseProps.title;
  return open(promiseProps).then(function (result) {
    return !!result;
  });
}
/**
 * 系统 window.prompt 的替代
 */

export function prompt(props) {
  var _extra$ok3, _extra$cancel2;

  var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return open(buildPropsForPromise(props, _objectSpread({
    content: /*#__PURE__*/React.createElement(PromptContent, null),
    buttons: [{
      spm: 'ok',
      label: (_extra$ok3 = extra.ok) !== null && _extra$ok3 !== void 0 ? _extra$ok3 : intl('op:ok'),
      result: function result(data) {
        return data.value;
      }
    }, {
      spm: 'cancel',
      label: (_extra$cancel2 = extra.cancel) !== null && _extra$cancel2 !== void 0 ? _extra$cancel2 : intl('op:cancel')
    }]
  }, COMMON_PROPS))).then(function (result) {
    return result === undefined ? '' : result;
  });
}