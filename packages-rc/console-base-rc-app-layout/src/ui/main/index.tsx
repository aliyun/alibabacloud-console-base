import React from 'react';
import styled from 'styled-components';

import {
  SIZE
} from '@alicloud/console-base-theme';

import {
  useDomProps
} from '../../model';
import {
  Aside,
  Content
} from '../rc-container';

const ScAppLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  height: 100vh;
  
  /* stylelint-disable selector-class-pattern */
  .hasTopbar & {
    height: calc(100vh - ${SIZE.HEIGHT_TOP_NAV}px);
  }
`;

export default function AppLayout(): JSX.Element {
  const domProps = useDomProps();
  
  return <ScAppLayout {...domProps}>
    <Aside />
    <Content />
  </ScAppLayout>;
}
