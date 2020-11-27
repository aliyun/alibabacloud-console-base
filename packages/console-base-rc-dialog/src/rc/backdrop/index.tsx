import React, {
  ReactPortal
} from 'react';
import {
  render,
  createPortal,
  unmountComponentAtNode
} from 'react-dom';
import styled from 'styled-components';

import {
  DIALOG
} from '@alicloud/console-base-styled-mixin';

interface IProps {
  zIndex: number;
}

const ID_BACKDROP_GATEWAY_DIV = 'console-base-rc-dialog-overlay-gateway';

const ScBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${DIALOG.BACKDROP_BGC};
  width: 100%;
  height: 100%;
`;

function createBackdropGateway(): HTMLElement {
  const div = document.createElement('div');
  
  div.id = ID_BACKDROP_GATEWAY_DIV;
  document.body.appendChild(div);
  
  return div;
}

function getBackdropGateWay(): HTMLElement | null {
  return document.getElementById(ID_BACKDROP_GATEWAY_DIV);
}

export default function Backdrop({
  zIndex
}: IProps): ReactPortal {
  return createPortal(<ScBackdrop {...{
    style: {
      zIndex
    }
  }} />, document.body);
}

export function showBackdrop(zIndex: number): void {
  const gateway: HTMLElement = getBackdropGateWay() || createBackdropGateway();
  
  render(<Backdrop zIndex={zIndex} />, gateway);
}

export function removeBackdrop(): void {
  const gateway: HTMLElement | null = getBackdropGateWay();

  if (!gateway) {
    return;
  }
  
  unmountComponentAtNode(gateway);
  
  try {
    gateway.remove(); // IE 不支持 remove https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
  } catch (e) {
    // 那就不 remove 也没事
  }
}

