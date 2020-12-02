"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _const = require("../const");

var _intl = _interopRequireDefault(require("../intl"));

var _forbidden = _interopRequireDefault(require("./risk/forbidden"));

var _invalid = _interopRequireDefault(require("./risk/invalid"));

var _verify = _interopRequireDefault(require("./risk/verify"));

var _convertRiskInfo = _interopRequireDefault(require("./convert-risk-info"));

var _error = require("./error");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 根据业务错误 code 为基础的 fetcher 添加风控流程
 * 
 * --------------------------------------------------------------------
 *            +-------------------+
 *            |  fetcher.request  |
 *            +---------+---------+
 *                      |
 *                  IF--˅---+
 *    +-------------Y  OK?  |
 *    |             +---N---+
 *    |                 |
 *    |               (err1)
 *    |                 |
 *    |         IF------˅------+      DIALOG-----------+     THROW=======================+ √ (test passed)
 *    |         |  forbidden?  Y ---> | risk/forbidden +---> || FetchErrorRiskForbidden ||
 *    |         +-------N------+      +----------------+     +===========================+ (can be ignored)
 *    |                 |
 *    |        IF-------˅--------+      THROW======+ √ (test passed)
 *    |        |  need verify?   N ---> ||  err1  ||
 *    |        +--------Y--------+      ===========+ (should be handled in the error model)
 *    |                 |
 *    |         DIALOG--˅--------+                  THROW=============================+ √ (test passed)
 *    |         |  risk/verify   +--- <CANCEL> ---> || FetchErrorRiskVerifyCancelled ||
 *    |         +-------+--------+                  +=================================+ (can be ignored)
 *    |                 |
 *    |   +-------------˅-----------+      +----------------+                    THROW=====================+ √ (test passed)
 *    |   |  verify setting right?  N ---> +  prompt about  +---> <dismiss> ---> || FetchErrorRiskInvalid ||
 *    |   +-------------Y-----------+      +----------------+                    +=========================+ (can be ignored)
 *    |                 |
 *    |        +--------˅--------+     +---------------------+ √ (test passed)
 *    |        |    input code   | <---+  warn code invalid  | <-------------+
 *    |        +--------+--------+     +---------------------+               |
 *    |                 |                                                    |
 *    |             <CONFIRM>                                                |
 *    |  verifyType + verifyCode + requestId                                 |
 *    |                 |                                                    |
 *    |         +-------˅-------+         IF------------Y-----------+        |
 *    |         |  fetch again  |   +---> |  code invalid / needed  Y -------+
 *    |         +-------+-------+   |     +-------------N-----------+
 *    |                 |         (err2)                |
 *    |             IF--˅---+       |        +----------˅-----------+
 *    |             +  OK?  N ------+        | risk/verify dismiss |
 *    |             +---Y---+                +----------+-----------+
 *    |                 |                               |
 *    |      +----------˅----------+            THROW===˅======+ √ (test passed)
 *    |      | risk/verify dismiss |            ||    err2    ||
 *    |      +----------+----------+            +==============+ (should be handled externally)
 *    |                 |
 *    |          +======˅======+ √ (test passed)
 *    +--------> || resolved! ||
 *               +=============+
 * --------------------------------------------------------------------
 */
var _default = function _default(o) {
  var riskConfig = _objectSpread(_objectSpread({}, _const.DEFAULT_RISK_CONFIG), o);

  return /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(err, config, response, request) {
      var code, responseData, riskInfo;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              code = err.code;
              responseData = response === null || response === void 0 ? void 0 : response.data;
              _context.t0 = code;
              _context.next = _context.t0 === riskConfig.CODE_FORBIDDEN ? 5 : _context.t0 === riskConfig.CODE_NEED_VERIFY ? 8 : 27;
              break;

            case 5:
              _context.next = 7;
              return (0, _forbidden.default)();

            case 7:
              throw (0, _error.convertToRiskErrorForbidden)(err);

            case 8:
              // 加花括号防止 eslint no-case-declarations
              riskInfo = (0, _convertRiskInfo.default)(responseData, riskConfig);
              _context.t1 = riskInfo.type;
              _context.next = _context.t1 === _const.EVerifyType.NONE ? 12 : _context.t1 === _const.EVerifyType.UNKNOWN ? 15 : _context.t1 === _const.EVerifyType.SMS ? 18 : _context.t1 === _const.EVerifyType.EMAIL ? 18 : 23;
              break;

            case 12:
              _context.next = 14;
              return (0, _invalid.default)((0, _intl.default)('message:invalid_unknown!lines'), riskConfig.URL_SETTINGS);

            case 14:
              throw (0, _error.convertToRiskErrorInvalid)(err);

            case 15:
              _context.next = 17;
              return (0, _invalid.default)((0, _intl.default)('message:invalid_unsupported_{method}!html!lines', {
                method: riskInfo.verifyType
              }), riskConfig.URL_SETTINGS);

            case 17:
              throw (0, _error.convertToRiskErrorInvalid)(err);

            case 18:
              if (riskInfo.detail) {
                _context.next = 22;
                break;
              }

              _context.next = 21;
              return (0, _invalid.default)((0, _intl.default)('message:invalid_unknown!lines'), riskConfig.URL_SETTINGS);

            case 21:
              throw (0, _error.convertToRiskErrorInvalid)(err);

            case 22:
              return _context.abrupt("break", 24);

            case 23:
              return _context.abrupt("break", 24);

            case 24:
              if (!((0, _get2.default)(config, 'body.verifyCode') || (0, _get2.default)(config, 'params.verifyCode'))) {
                _context.next = 26;
                break;
              }

              throw err;

            case 26:
              return _context.abrupt("return", (0, _verify.default)({
                request: request,
                fetcherConfig: config,
                riskInfo: riskInfo,
                riskConfig: riskConfig
              }).catch(function (err1) {
                // err1 undefined 表示 cancelled
                throw err1 !== null && err1 !== void 0 ? err1 : (0, _error.convertToRiskErrorCancelled)(err);
              }));

            case 27:
              throw err;

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.default = _default;