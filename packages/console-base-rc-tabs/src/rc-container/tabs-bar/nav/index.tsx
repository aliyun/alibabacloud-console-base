import React from 'react';
import styled from 'styled-components';

import {
  useProps,
  useRefNav,
  useStateNavOffset
} from '../../../model';

import NavItem from './nav-item';

const ScNav = styled.nav`
  display: inline-block;
  padding-left: 16px;
  white-space: nowrap;
  transition: transform 0.3s ease-in;
`;

export default function Nav(): JSX.Element {
  const {
    tabs
  } = useProps();
  const refNav = useRefNav();
  const navOffset = useStateNavOffset();
  
  return <ScNav {...{
    ref: refNav,
    style: {
      transform: `translate(${navOffset}px, 0)`
    }
  }}>
    {tabs.map((v, i): JSX.Element => <NavItem {...{
      key: v.key || i,
      tab: v,
      index: i
    }} />)}
  </ScNav>;
}
