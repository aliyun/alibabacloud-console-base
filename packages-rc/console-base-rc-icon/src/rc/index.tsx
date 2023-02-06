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
  IScPropsIcon,
  IPropsIcon
} from '../types';

function getCode(props: IScPropsIcon): string {
  const code = EIconType[props.$type];
  
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  return code ? `\\${code}` : '';
}

// https://at.alicdn.com/t/font_1256165_z7wbayy4kp.css
const fontFamily = injectIconFont('1256165', 'z7wbayy4kp', {
  pathExtra: '/a'
});

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

const cssRotate = css<IScPropsIcon>`
  ${props => {
    if (props.$type === 'loading') {
      return cssLoading;
    }
    
    if (typeof props.$rotate === 'number' && props.$rotate > 0) {
      return css`
        transform: rotate(${props.$rotate}deg);
      `;
    }
  }}
`;

const ScIcon = styled(IconBase)<IScPropsIcon>`
  font-family: ${fontFamily} !important;
  
  &:before {
    content: '${props => getCode(props)}';
    ${cssRotate}
  }
`;

/**
 * ConsoleBase 项目自用的图标组件
 */
export default function Icon({
  type,
  rotate,
  ...props
}: IPropsIcon): JSX.Element {
  return <ScIcon {...{
    $type: type,
    $rotate: rotate,
    ...props
  }} />;
}
