"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createFactory;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _mergeDefaultParams = _interopRequireDefault(require("../util/merge-default-params"));

var _mergeOnBeforeSend = _interopRequireDefault(require("../util/merge-on-before-send"));

var _createLogger = _interopRequireDefault(require("./create-logger"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 创建 `createLogger` 方法的方法，对期望扩展默认参数的场景做了规范。
 *
 * 一般不会在项目中直接使用，而是用它来生成一个 npm 包。
 */
function createFactory(factoryDefaultParams, factoryOnBeforeSend) {
  return function (_ref) {
    var defaultParams = _ref.defaultParams,
        onBeforeSend = _ref.onBeforeSend,
        options = (0, _objectWithoutProperties2.default)(_ref, ["defaultParams", "onBeforeSend"]);
    return (0, _createLogger.default)(_objectSpread(_objectSpread({}, options), {}, {
      defaultParams: (0, _mergeDefaultParams.default)(factoryDefaultParams, defaultParams),
      onBeforeSend: (0, _mergeOnBeforeSend.default)(factoryOnBeforeSend, onBeforeSend)
    }));
  };
}