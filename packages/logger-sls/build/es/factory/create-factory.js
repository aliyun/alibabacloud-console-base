import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import mergeDefaultParams from '../util/merge-default-params';
import mergeOnBeforeSend from '../util/merge-on-before-send';
import createLogger from './create-logger';
/**
 * 创建 `createLogger` 方法的方法，对期望扩展默认参数的场景做了规范。
 *
 * 一般不会在项目中直接使用，而是用它来生成一个 npm 包。
 */

export default function createFactory(factoryDefaultParams, factoryOnBeforeSend) {
  return function (_ref) {
    var defaultParams = _ref.defaultParams,
        onBeforeSend = _ref.onBeforeSend,
        options = _objectWithoutProperties(_ref, ["defaultParams", "onBeforeSend"]);

    return createLogger(_objectSpread(_objectSpread({}, options), {}, {
      defaultParams: mergeDefaultParams(factoryDefaultParams, defaultParams),
      onBeforeSend: mergeOnBeforeSend(factoryOnBeforeSend, onBeforeSend)
    }));
  };
}