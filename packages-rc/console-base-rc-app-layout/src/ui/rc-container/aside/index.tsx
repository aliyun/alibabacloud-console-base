import React from 'react';
import styled from 'styled-components';

import SideNav from '@alicloud/console-base-rc-aside-nav';

import {
  useAsideNavProps
} from '../../../model';
import {
  WIDTH_ASIDE
} from '../../const';

interface IScAsideProps {
  $collapsed?: boolean;
}

const ScAside = styled.aside<IScAsideProps>`
  position: relative;
  width: ${props => (props.$collapsed ? 0 : WIDTH_ASIDE)}px;
  height: 100%;
  transition: all linear 200ms;
`;

export default function Aside(): JSX.Element | null {
  const asideNavProps = useAsideNavProps();
  
  return asideNavProps ? <ScAside $collapsed={asideNavProps.collapsed}>
    <SideNav {...asideNavProps} />
  </ScAside> : null;
}
