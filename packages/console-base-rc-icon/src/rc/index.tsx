import React from 'react';
import styled, {
  css,
  keyframes
} from 'styled-components';

import {
  IconBase,
  injectIconFont
} from '@alicloud/iconfont-helper';

import {
  EIconType
} from '../enum';
import {
  IPropsIconPure,
  IPropsIcon
} from '../types';

function getCode(props: IPropsIconPure): string {
  const code = EIconType[props.type];
  
  return code ? `\\${code}` : '';
}

// https://at.alicdn.com/t/font_1256165_uu93sx06p38.css
const fontFamily = injectIconFont('1256165', 'uu93sx06p38');

const kfRotate = keyframes`
  0% {
    transform: rotate(0deg);
    transform-origin: 50% 50%;
  }
  
  100% {
    transform: rotate(1turn);
    transform-origin: 50% 50%;
  }
`;

const cssLoading = css`
  animation: ${kfRotate} 1s linear infinite;
`;

const cssRotate = css<IPropsIconPure>`
  ${props => {
    if (props.type === 'loading') {
      return cssLoading;
    }
    
    if (typeof props.rotate === 'number' && props.rotate > 0) {
      return css`
        transform: rotate(${props.rotate}deg);
      `;
    }
  }}
`;

const ScIcon = styled(IconBase)<IPropsIconPure>`
  font-family: ${fontFamily} !important;
  
  &:before {
    content: '${props => getCode(props)}';
    ${cssRotate}
  }
`;

/**
 * ConsoleBase 项目自用的图标组件
 */
export default function Icon(props: IPropsIcon): JSX.Element {
  return <ScIcon {...props} />;
}
