import React from 'react';
import styled from 'styled-components';

import {
  IconBase,
  injectIconFont
} from '@alicloud/iconfont-helper';

import {
  IconProductType,
  IPropsIconProduct
} from '../types';
import {
  EIconType
} from '../enum';

interface IPropsScI {
  code: string;
}

// https://at.alicdn.com/t/font_1323992_ah283k4eqna.css
const fontFamily = injectIconFont('1323992', 'ah283k4eqna');

const ScI = styled(IconBase)<IPropsScI>`
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
