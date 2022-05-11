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
  const refNav = useRefNav();
  const visibleTabs = useVisibleTabs();
  const navOffset = useStateNavOffset();
  
  return <ScNav {...{
    ref: refNav,
    style: {
      transform: `translate(${navOffset}px, 0)`
    }
  }}>
    {visibleTabs.map((v): JSX.Element | null => <NavItem {...{
      key: v.key,
      tab: v
    }} />)}
  </ScNav>;
}
