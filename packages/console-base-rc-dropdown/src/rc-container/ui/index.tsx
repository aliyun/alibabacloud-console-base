import React from 'react';
import styled from 'styled-components';

import {
  useProps,
  useRefDropdown,
  useHandleDropdownMouseEnter,
  useHandleDropdownMouseLeave
} from '../../model';

import TheTrigger from './the-trigger';
import TheDrop from './the-drop';

interface IPropsScDropdown {
  block?: boolean;
}

const ScDropdown = styled.div<IPropsScDropdown>`
  display: ${props => (props.block ? 'block' : 'inline-block')};
  position: relative;
`;

export default function Dropdown(): JSX.Element {
  const {
    block
  } = useProps();
  const refDropdown = useRefDropdown();
  const handleMouseEnter = useHandleDropdownMouseEnter();
  const handleMouseLeave = useHandleDropdownMouseLeave();
  
  return <ScDropdown {...{
    ref: refDropdown,
    block,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }}>
    <TheTrigger />
    <TheDrop />
  </ScDropdown>;
}
