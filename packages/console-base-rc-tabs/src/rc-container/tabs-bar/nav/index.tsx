import React from 'react';
import styled from 'styled-components';

import {
  useRefNav,
  useStateNavOffset,
  useVisibleTabs
} from '../../../model';

import NavItem from './nav-item';

const ScNav = styled.nav`
  display: inline-block;
  padding-left: 16px;
  white-space: nowrap;
  transition: transform 0.3s ease-in;
`;

export default function Nav(): JSX.Element {
  const visibleTabs = useVisibleTabs();
  const refNav = useRefNav();
  const navOffset = useStateNavOffset();
  
  return <ScNav {...{
    ref: refNav,
    style: {
      transform: `translate(${navOffset}px, 0)`
    }
  }}>
    {visibleTabs.map((v, i): JSX.Element | null => <NavItem {...{
      key: v.key || i,
      tab: v,
      index: i
    }} />)}
  </ScNav>;
}
