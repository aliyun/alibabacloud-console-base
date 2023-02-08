import React, {
  Fragment
} from 'react';
import styled from 'styled-components';

import {
  mixinTextTertiary
} from '@alicloud/console-base-theme';

import {
  IProps
} from '../types';

import Item from './item';

const ScBreadcrumb = styled.div`
  line-height: 1.5;
`;

const ScSeparator = styled.span`
  display: inline-block;
  margin: 0 8px;
  vertical-align: middle;
  ${mixinTextTertiary}
  
  &:before {
    content: '/';
  }
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
      {i > 0 ? <ScSeparator /> : null}
      <Item {...v} />
    </Fragment>)}
  </ScBreadcrumb>;
}
