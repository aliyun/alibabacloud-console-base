export default function fixApiResult() {
  var shitty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(shitty || {}).reduce(function (result, v) {
    var o = shitty[v];

    if (o && o.code === '200' && o.data !== undefined) {
      result[v] = o.data;
    }

    return result;
  }, {});
}