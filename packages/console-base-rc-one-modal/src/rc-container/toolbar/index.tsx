import React from 'react';
import styled from 'styled-components';

import {
  BGC_TOOLBAR,
  HEIGHT_TOOLBAR
} from '../../const';
import {
  useRndDragHandleClass,
  useHandleDragBarDoubleClick
} from '../../model';

import ButtonMinimize from './button-minimize';
import ButtonPin from './button-pin';
import ButtonStickRight from './button-stick-right';
import ButtonX from './button-x';

const ScToolbar = styled.div`
  display: flex;
  padding: 0 4px;
  box-sizing: border-box;
  background-color: ${BGC_TOOLBAR};
  height: ${HEIGHT_TOOLBAR}px;
  color: #fff;
`;

const ScDragHandle = styled.div`
  flex: 1;
  height: 100%;
`;

const ScControls = styled.div`
  height: 100%;
  font-size: 0;
`;

export default function Toolbar(): JSX.Element {
  const dragHandleClass = useRndDragHandleClass();
  const handleDragBarDoubleClick = useHandleDragBarDoubleClick();
  
  return <ScToolbar>
    <ScDragHandle {...{
      className: dragHandleClass,
      onDoubleClick: handleDragBarDoubleClick
    }} />
    <ScControls>
      <ButtonMinimize />
      <ButtonPin />
      <ButtonStickRight />
      <ButtonX />
    </ScControls>
  </ScToolbar>;
}
