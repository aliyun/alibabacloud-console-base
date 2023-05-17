import React from 'react';
import styled from 'styled-components';

import {
  IconBase,
  injectIconFont
} from '@alicloud/iconfont-helper';

import {
  TIconProductType,
  IPropsIconProduct
} from '../types';
import {
  EIconType
} from '../enum';

interface IPropsScI {
  code: string;
}

// https://at.alicdn.com/t/font_1323992_9z4aj046a1h.css
const fontFamily = injectIconFont('1323992', '9z4aj046a1h', {
  pathExtra: '/a'
});

const ScI = styled(IconBase)<IPropsScI>`
  font-family: ${fontFamily} !important;
  
  &:before {
    content: '${(props: IPropsScI) => props.code}';
  }
`;

function normalizeType(type: string): TIconProductType {
  let normalizedType = (type || '').toLocaleLowerCase();
  
  normalizedType = normalizedType.replace(/next$/, '').replace(/-intl$/, '');
  
  if (normalizedType !== 'renew') {
    normalizedType = normalizedType.replace(/new$/, '');
  }
  
  return normalizedType as TIconProductType;
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
