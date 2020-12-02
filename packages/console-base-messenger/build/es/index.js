import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { EToolkitIdSystem } from './const';
import appBroadcast from './messenger/app-broadcast';
import appSubscribe from './messenger/app-subscribe';
import consoleBaseBroadcast from './messenger/console-base-broadcast';
import consoleBaseSubscribe from './messenger/console-base-subscribe';
/**
 * 给控制台使用
 */

export var forApp = _objectSpread(_objectSpread({}, appBroadcast), appSubscribe);
/**
 * 给 console-base 使用
 */

export var forConsoleBase = _objectSpread(_objectSpread({}, consoleBaseBroadcast), consoleBaseSubscribe);
export { EToolkitIdSystem };