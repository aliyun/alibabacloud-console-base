import _isNil from 'lodash/isNil';
import _map from 'lodash/map';
import { isValidElement } from 'react';
export default function convertItems(o, ignoreEmpty) {
  if (!o) {
    return [];
  }

  var arr = Array.isArray(o) ? o : _map(o, function (v, k) {
    return {
      k: k,
      v: v
    };
  }).map(function (kv) {
    if (!kv || typeof kv.v === 'function') {
      return null;
    }

    var k = kv.k,
        v = kv.v;
    var displayV = v;

    if (!_isNil(v) && typeof v === 'string' && ! /*#__PURE__*/isValidElement(v)) {
      displayV = String(displayV);
    }

    return {
      k: k,
      v: displayV
    };
  });
  return arr.filter(function (v) {
    if (!v) {
      return false;
    }

    return !(_isNil(v.v) && ignoreEmpty);
  });
}