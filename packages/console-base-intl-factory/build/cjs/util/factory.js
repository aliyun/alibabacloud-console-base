"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = factory;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _consoleBaseIntlFactoryBasic = _interopRequireDefault(require("@alicloud/console-base-intl-factory-basic"));

var _consoleBaseRcIntl = _interopRequireDefault(require("@alicloud/console-base-rc-intl"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 获得扩展了的 intl 方法
 */
function factory(messagesMap) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      locale = _ref.locale,
      localeDefault = _ref.localeDefault,
      _ref$instructionSepar = _ref.instructionSeparator,
      instructionSeparator = _ref$instructionSepar === void 0 ? '!' : _ref$instructionSepar,
      _ref$htmlInstruction = _ref.htmlInstruction,
      htmlInstruction = _ref$htmlInstruction === void 0 ? 'html' : _ref$htmlInstruction,
      _ref$linesInstruction = _ref.linesInstruction,
      linesInstruction = _ref$linesInstruction === void 0 ? 'lines' : _ref$linesInstruction;

  var intlBasic = (0, _consoleBaseIntlFactoryBasic.default)(messagesMap, {
    locale: locale,
    localeDefault: localeDefault
  });
  /**
   * 检查 id 是否有特殊指令
   */

  function checkIdForInstructions(id) {
    var parts = id.split(instructionSeparator);
    return {
      html: parts.includes(htmlInstruction),
      lines: parts.includes(linesInstruction)
    };
  } // 一般情况下它会返回 string，但如果 key 或 instructionsExtra 中带了指令，则可能返回 JSX.Element


  var intlMessage = function intlMessage(id, values, instructionsExtra) {
    var text = intlBasic(id, values);

    var _checkIdForInstructio = _objectSpread(_objectSpread({}, checkIdForInstructions(id)), instructionsExtra),
        lines = _checkIdForInstructio.lines,
        html = _checkIdForInstructio.html;

    if (!html && !lines) {
      // 没有特殊处理
      return text;
    }

    return /*#__PURE__*/_react.default.createElement(_consoleBaseRcIntl.default, {
      text: text,
      html: html,
      lines: lines
    });
  };

  intlMessage.intlDate = intlBasic.intlDate;
  return intlMessage;
}