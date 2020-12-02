import React, {
  Fragment
} from 'react';
import styled from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-styled-mixin';

import {
  IProps
} from '../types';

import Separator from './separator';
import Item from './item';

const ScBreadcrumb = styled.div`
  line-height: 1.5;
  overflow: hidden;
  white-space: nowrap;
  color: ${COLOR.TEXT_SECONDARY};
`;

/**
 * 面包屑
 */
export default function Breadcrumb({
  items = [],
  ...props
}: IProps): JSX.Element | null {
  if (!items.length) {
    return null;
  }
  
  return <ScBreadcrumb {...props}>
    {items.map((v, i) => <Fragment key={i}>
      {i > 0 ? <Separator /> : null}
      <Item {...v} />
    </Fragment>)}
  </ScBreadcrumb>;
}
