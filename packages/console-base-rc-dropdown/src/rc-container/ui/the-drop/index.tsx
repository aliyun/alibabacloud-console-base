import React, {
  ReactPortal,
  CSSProperties,
  useState,
  useEffect
} from 'react';
import {
  createPortal
} from 'react-dom';
import styled, {
  css
} from 'styled-components';

import {
  COLOR,
  SHADOW
} from '@alicloud/console-base-theme';

import {
  TBodyPadding
} from '../../../types';
import {
  useProps,
  useRefDropdown,
  useVisible
} from '../../../model';

interface IPropsScTheDrop {
  visible: boolean;
}

interface IPropsScDropBody {
  bodyPadding?: TBodyPadding;
}

const ScTheDrop = styled.div<IPropsScTheDrop>`
  display: block;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  border: 1px solid ${COLOR.LINE_BORDER_FADE};
  border: 1px solid var(--cb-color-line-border-fade, ${COLOR.LINE_BORDER_FADE});
  box-shadow: ${SHADOW.M};
  box-shadow: var(--cb-shadow-m, ${SHADOW.M});
  box-sizing: border-box;
  background-color: ${COLOR.FILL_DROPDOWN});
  background-color: var(--cb-color-fill-dropdown, ${COLOR.FILL_DROPDOWN});
  min-width: 120px;
  font-size: 12px;
  color: ${COLOR.TEXT_PRIMARY};
  color: var(--cb-color-text-primary, ${COLOR.TEXT_PRIMARY});
  transition: all 360ms ease;
  
  ${props => {
    if (props.visible) {
      return css`
        visibility: visible;
        opacity: 1;
      `;
    }
  }};
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
  border-top: 1px solid ${COLOR.LINE_DIVIDER};
  border-top: 1px solid var(--cb-color-line-divider, ${COLOR.LINE_DIVIDER});
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
    align,
    bodyPadding,
    dropContainer = 'inside'
  } = useProps();
  const refDropdown = useRefDropdown();
  const visible = useVisible();
  
  const [stateTop, setStateTop] = useState<string | number | undefined>();
  const [stateLeft, setStateLeft] = useState<number | undefined>();
  const [stateRight, setStateRight] = useState<number | undefined>();
  const dropdownEl: HTMLDivElement | null | undefined = dropContainer === 'body' ? refDropdown.current : undefined; // 当 dropContainer 为 body 的时候，它才有用
  const [offsetX = 0, offsetY = 0] = offset || [];
  
  const style: CSSProperties = {
    zIndex,
    top: stateTop,
    left: stateLeft,
    right: stateRight
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
  
  useEffect(() => {
    function getTopLeft(div: HTMLDivElement): [number, number] {
      const rect = div.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || 0;
      
      return [
        Math.ceil((rect.y || rect.top) + rect.height) + scrollTop + 1,
        Math.ceil(rect.left) + scrollLeft + 1
      ];
    }
    
    if (!visible) { // 不可见时
      if (dropdownEl) {
        const [t, l] = getTopLeft(dropdownEl);
        
        setStateTop(t + 10); // +10 是为了动画
        setStateLeft(l);
      } else {
        setStateTop('150%'); // 为了动画
      }
      
      return;
    }
    
    if (!dropdownEl) {
      setStateTop('100%');
      
      if (align === 'right') {
        setStateLeft(undefined);
        setStateRight(0);
      } else {
        setStateLeft(0);
        setStateRight(undefined);
      }
      
      return;
    }
    
    // TODO align right 还有问题
    if (dropdownEl) {
      const [t, l] = getTopLeft(dropdownEl);
      
      setStateTop(t);
      setStateLeft(l);
    }
  }, [dropdownEl, visible, align]);
  
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
