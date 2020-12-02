import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import _forEach from 'lodash/forEach';
import update from 'immutability-helper';

/**
 * 有限更新 props
 */
export default function reduceUpdateProps(state, payload) {
  var newUpdate = _objectSpread({}, state.propsUpdate);

  _forEach(payload, function (v, k) {
    if (v === undefined || v === null) {
      // 允许通过传入 undefined / null 来复原初始值
      delete newUpdate[k];
    } else {
      newUpdate[k] = v;
    }
  });

  return update(state, {
    propsUpdate: {
      $set: newUpdate
    }
  });
}