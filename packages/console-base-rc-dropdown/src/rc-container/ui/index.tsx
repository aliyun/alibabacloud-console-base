import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  useProps,
  useRefDropdown,
  useDispatchToggleVisibleWithDebounce
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
  const dispatchToggleVisibleWithDebounce = useDispatchToggleVisibleWithDebounce();
  const handleMouseEnter = useCallback((): void => dispatchToggleVisibleWithDebounce(true), [dispatchToggleVisibleWithDebounce]);
  const handleMouseLeave = useCallback((): void => dispatchToggleVisibleWithDebounce(false), [dispatchToggleVisibleWithDebounce]);
  
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
