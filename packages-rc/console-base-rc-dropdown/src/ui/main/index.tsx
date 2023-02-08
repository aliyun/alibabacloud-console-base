import React from 'react';
import styled from 'styled-components';

import {
  useProps,
  useRefDropdown,
  useHandleDropdownMouseEnter,
  useHandleDropdownMouseLeave
} from '../../model';
import {
  DropdownTrigger,
  DropdownDrop
} from '../rc-container';

interface IPropsScDropdown {
  block?: boolean;
}

const ScDropdown = styled.div<IPropsScDropdown>`
  display: ${props => (props.block ? 'block' : 'inline-block')};
  position: relative;
`;

export default function Main(): JSX.Element {
  const {
    className,
    style,
    block
  } = useProps();
  const refDropdown = useRefDropdown();
  const handleMouseEnter = useHandleDropdownMouseEnter();
  const handleMouseLeave = useHandleDropdownMouseLeave();
  
  return <ScDropdown {...{
    className,
    style,
    ref: refDropdown,
    block,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }}>
    <DropdownTrigger />
    <DropdownDrop />
  </ScDropdown>;
}
