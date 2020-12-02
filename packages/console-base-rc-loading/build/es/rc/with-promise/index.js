import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useState, useEffect } from 'react';
import useIsUnmounted from '@alicloud/react-hook-is-unmounted';
import { ELoading } from '@alicloud/console-base-common-typings';
import WithLoading from '../with-loading';
export default function WithPromise(_ref) {
  var promise = _ref.promise,
      props = _objectWithoutProperties(_ref, ["promise"]);

  var isUnmounted = useIsUnmounted();

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      stateDwl = _useState2[0],
      setStateDwl = _useState2[1];

  useEffect(function () {
    if (!promise) {
      setStateDwl(null);
      return;
    }

    setStateDwl({
      loading: ELoading.LOADING,
      data: null
    });
    promise.then(function (result) {
      if (isUnmounted()) {
        return;
      }

      setStateDwl({
        loading: ELoading.SUCCESS,
        data: result
      });
    }).catch(function (err) {
      if (isUnmounted()) {
        return;
      }

      setStateDwl({
        loading: ELoading.ERROR,
        data: null,
        error: err
      });
    });
  }, [isUnmounted, promise, setStateDwl]);
  return promise ? /*#__PURE__*/React.createElement(WithLoading, _objectSpread(_objectSpread({}, stateDwl), props)) : null;
}