import React from 'react';
import styled from 'styled-components';

import {
  glyph
} from '@alicloud/console-base-theme';

import {
  IconProductType,
  IPropsIconProduct
} from '../types';
import {
  EIconType
} from '../const';

interface IPropsScI {
  code: string;
}

const fontFamily = glyph.injectGlobalFontFace({ // dataUrl 太大 50K+ 就不放了
  projectId: '1323992',
  hash: 't7d4xa4hty'
});

const ScI = styled.i<IPropsScI>`
  ${glyph.base};
  font-family: ${fontFamily} !important;
  
  &:before {
    content: '${(props: IPropsScI) => props.code}';
  }
`;

function normalizeType(type: string): IconProductType {
  let normalizedType = (type || '').toLocaleLowerCase();
  
  normalizedType = normalizedType.replace(/next$/, '').replace(/-intl$/, '');
  
  if (normalizedType !== 'renew') {
    normalizedType = normalizedType.replace(/new$/, '');
  }
  
  return normalizedType as IconProductType;
}

/**
 * ConsoleBase 提供的阿里云所有产品的图标
 */
export default function IconProduct({
  type = '',
  ...props
}: IPropsIconProduct): JSX.Element {
  return <ScI {...{
    ...props,
    code: `\\${EIconType[normalizeType(type)] || 'e600'}`,
    'data-icon-product': type // for debugging purpose
  }} />;
}
