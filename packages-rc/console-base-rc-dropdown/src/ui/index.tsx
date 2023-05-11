/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus */
import React from 'react';
import styled from 'styled-components';

import useMouseHover from '@alicloud/react-hook-mouse-hover';

import {
  useProps,
  useRefDropdown,
  useDropVisible,
  useHandleToggleVisible,
  useHandleToggleVisibleTrue,
  useHandleToggleVisibleFalse
} from '../model';

import {
  DropdownDrop
} from './rc-container';

interface IScProps {
  $block?: boolean;
}

const ScDropdown = styled.div<IScProps>`
  display: ${props => (props.$block ? 'block' : 'inline-block')};
  position: relative;
`;

export default function Main(): JSX.Element {
  const {
    block,
    className,
    style,
    trigger
  } = useProps();
  const refDropdown = useRefDropdown();
  const dropVisible = useDropVisible();
  const handleToggleVisible = useHandleToggleVisible();
  const [onMouseEnter, onMouseLeave, onClick] = useMouseHover({
    active: dropVisible,
    onEnter: useHandleToggleVisibleTrue(),
    onLeave: useHandleToggleVisibleFalse(),
    onActiveChange: handleToggleVisible
  });
  
  return <ScDropdown {...{
    $block: block,
    className,
    style,
    ref: refDropdown,
    onMouseEnter,
    onMouseLeave
  }}>
    <span role="button" onClick={onClick}>{trigger}</span>
    <DropdownDrop />
  </ScDropdown>;
}
