import React from 'react';
import {
  render,
  unmountComponentAtNode
} from 'react-dom';
import styled from 'styled-components';

import {
  mixinBgBackdrop
} from '@alicloud/console-base-theme';

import {
  handleBackdropClick
} from '../../model';

interface IProps {
  zIndex: number;
}

let backdropGateway: HTMLDivElement | null = null;

const ScBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${mixinBgBackdrop}
`;

export default function Backdrop({
  zIndex
}: IProps): JSX.Element {
  return <ScBackdrop {...{
    style: {
      zIndex
    },
    onClick: handleBackdropClick
  }} />;
}

export function getBackdropGateWay(): HTMLDivElement {
  if (!backdropGateway) {
    backdropGateway = document.createElement('div');
    backdropGateway.setAttribute('data-dialog-backdrop-overlay', ''); // 仅仅只是给个标注，没有任何意义
    document.body.appendChild(backdropGateway);
  }
  
  return backdropGateway;
}

export function showBackdrop(zIndex: number): void {
  const gateway: HTMLDivElement = getBackdropGateWay();
  
  render(<Backdrop zIndex={zIndex} />, gateway);
}

export function removeBackdrop(): void {
  if (!backdropGateway) {
    return;
  }
  
  unmountComponentAtNode(backdropGateway);
  
  try {
    backdropGateway.remove(); // IE 不支持 remove https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
    backdropGateway = null;
  } catch (err) {
    // 那就不 remove 也没事
  }
}
