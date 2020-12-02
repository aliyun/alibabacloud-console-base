"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Backdrop;
exports.showBackdrop = showBackdrop;
exports.removeBackdrop = removeBackdrop;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ID_BACKDROP_GATEWAY_DIV = 'console-base-rc-dialog-overlay-gateway';

var ScBackdrop = _styledComponents.default.div(_templateObject(), _consoleBaseStyledMixin.DIALOG.BACKDROP_BGC);

function createBackdropGateway() {
  var div = document.createElement('div');
  div.id = ID_BACKDROP_GATEWAY_DIV;
  document.body.appendChild(div);
  return div;
}

function getBackdropGateWay() {
  return document.getElementById(ID_BACKDROP_GATEWAY_DIV);
}

function Backdrop(_ref) {
  var zIndex = _ref.zIndex;
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement(ScBackdrop, {
    style: {
      zIndex: zIndex
    }
  }), document.body);
}

function showBackdrop(zIndex) {
  var gateway = getBackdropGateWay() || createBackdropGateway();
  (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(Backdrop, {
    zIndex: zIndex
  }), gateway);
}

function removeBackdrop() {
  var gateway = getBackdropGateWay();

  if (!gateway) {
    return;
  }

  (0, _reactDom.unmountComponentAtNode)(gateway);

  try {
    gateway.remove(); // IE 不支持 remove https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
  } catch (e) {// 那就不 remove 也没事
  }
}