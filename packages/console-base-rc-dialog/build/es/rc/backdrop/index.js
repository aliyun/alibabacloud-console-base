import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import { render, createPortal, unmountComponentAtNode } from 'react-dom';
import styled from 'styled-components';
import { DIALOG } from '@alicloud/console-base-styled-mixin';
var ID_BACKDROP_GATEWAY_DIV = 'console-base-rc-dialog-overlay-gateway';
var ScBackdrop = styled.div(_templateObject(), DIALOG.BACKDROP_BGC);

function createBackdropGateway() {
  var div = document.createElement('div');
  div.id = ID_BACKDROP_GATEWAY_DIV;
  document.body.appendChild(div);
  return div;
}

function getBackdropGateWay() {
  return document.getElementById(ID_BACKDROP_GATEWAY_DIV);
}

export default function Backdrop(_ref) {
  var zIndex = _ref.zIndex;
  return /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(ScBackdrop, {
    style: {
      zIndex: zIndex
    }
  }), document.body);
}
export function showBackdrop(zIndex) {
  var gateway = getBackdropGateWay() || createBackdropGateway();
  render( /*#__PURE__*/React.createElement(Backdrop, {
    zIndex: zIndex
  }), gateway);
}
export function removeBackdrop() {
  var gateway = getBackdropGateWay();

  if (!gateway) {
    return;
  }

  unmountComponentAtNode(gateway);

  try {
    gateway.remove(); // IE 不支持 remove https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
  } catch (e) {// 那就不 remove 也没事
  }
}