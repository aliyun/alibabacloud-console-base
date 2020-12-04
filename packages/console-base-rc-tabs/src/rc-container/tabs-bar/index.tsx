import React from 'react';
import styled from 'styled-components';

import {
  HEIGHT_TAB_BAR,
  BGC_TAB_BAR
} from '../../const';
import {
  usePropClassNameForTabBar,
  useStateNavOffsetMax
} from '../../model';

import Nav from './nav';
import Scroller from './scroller';

const ScTabsBar = styled.div`
  position: relative;
  background-color: ${BGC_TAB_BAR};
  width: 100%;
  height: ${HEIGHT_TAB_BAR}px;
  overflow: hidden;
  color: #fff;
`;

export default function TabBar(): JSX.Element {
  const className = usePropClassNameForTabBar();
  const navOffsetMax = useStateNavOffsetMax();
  
  return <ScTabsBar className={className}>
    <Nav />
    {navOffsetMax < 0 ? <Scroller /> : null}
  </ScTabsBar>;
}
