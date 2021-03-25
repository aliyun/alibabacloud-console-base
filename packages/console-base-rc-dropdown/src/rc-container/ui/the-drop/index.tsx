import React, {
  ReactPortal,
  CSSProperties
} from 'react';
import {
  createPortal
} from 'react-dom';
import styled, {
  css
} from 'styled-components';

import {
  mixinTextPrimary,
  mixinBorderTertiary,
  mixinBgPrimary,
  mixinShadowLDown,
  mixinBorderTertiaryTop
} from '@alicloud/console-base-theme';

import {
  TBodyPadding
} from '../../../types';
import {
  useProps,
  useRefDropdown,
  useVisible,
  useDropPosition
} from '../../../model';

interface IPropsScTheDrop {
  visible: boolean;
}

interface IPropsScDropBody {
  bodyPadding?: TBodyPadding;
}

const cssVisible = css`
  visibility: visible;
  opacity: 1;
`;
const cssHidden = css`
  visibility: hidden;
  opacity: 0;
`;

const ScTheDrop = styled.div<IPropsScTheDrop>`
  display: block;
  position: absolute;
  box-sizing: border-box;
  min-width: 120px;
  font-size: 12px;
  transition: all 360ms ease;
  ${mixinTextPrimary}
  ${mixinBorderTertiary}
  ${mixinBgPrimary}
  ${mixinShadowLDown}
  ${props => (props.visible ? cssVisible : cssHidden)}
`;

const ScTheDropBody = styled.div<IPropsScDropBody>`
  ${props => {
    switch (props.bodyPadding) {
      case 'none':
        return null;
      case 'top':
        return css`
          padding-top: 8px;
        `;
      case 'bottom':
        return css`
          padding-bottom: 8px;
        `;
      default:
        return css`
          padding: 8px 0;
        `;
    }
  }};
`;

const ScTheDropFooter = styled.footer`
  ${mixinBorderTertiaryTop};
`;

export default function TheDrop(): JSX.Element | ReactPortal {
  const {
    header,
    body,
    footer,
    width,
    minWidth,
    maxWidth,
    zIndex = 10,
    offset,
    bodyPadding,
    dropContainer = 'inside'
  } = useProps();
  const refDropdown = useRefDropdown();
  const visible = useVisible();
  const dropPosition = useDropPosition();
  
  const dropdownEl: HTMLDivElement | null | undefined = dropContainer === 'body' ? refDropdown.current : undefined; // 当 dropContainer 为 body 的时候，它才有用
  const [offsetX = 0, offsetY = 0] = offset || [];
  
  const style: CSSProperties = {
    zIndex,
    ...dropPosition
  };
  
  if (width) {
    style.width = width;
  }
  
  if (minWidth) {
    style.minWidth = minWidth;
  }
  
  if (maxWidth) {
    style.maxWidth = maxWidth;
  }
  
  if (offsetX || offsetY) {
    style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }
  
  const jsx = <ScTheDrop {...{
    visible,
    style
  }}>
    {header ? <header>{header}</header> : null}
    <ScTheDropBody bodyPadding={bodyPadding}>{body}</ScTheDropBody>
    {footer ? <ScTheDropFooter>{footer}</ScTheDropFooter> : null}
  </ScTheDrop>;
  
  return dropdownEl ? createPortal(jsx, document.body) : jsx;
}
