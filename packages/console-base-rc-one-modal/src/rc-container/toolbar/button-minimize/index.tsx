import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  EModalMode
} from '../../../const';
import intl from '../../../intl';
import {
  usePropMinimizable,
  useMode,
  useDispatchChangeMode
} from '../../../model';
import ControlButton from '../../../rc/control-button';

// iconfont 效果不好
const ScIconMinimize = styled.i`
  display: inline-block;
  background-color: #fff;
  width: 10px;
  height: 1px;
  font-size: 0;
  vertical-align: middle;
`;

export default function ButtonMinimize(): JSX.Element | null {
  const minimizable = usePropMinimizable();
  const mode = useMode();
  const dispatchChangeMode = useDispatchChangeMode();
  const handleToggleMinimized = useCallback(() => dispatchChangeMode(mode === EModalMode.MINIMIZED ? EModalMode.FREE : EModalMode.MINIMIZED), [mode, dispatchChangeMode]);
  
  return minimizable ? <ControlButton {...{
    spm: 'min',
    label: <ScIconMinimize />,
    title: intl('op:minimize'),
    onClick: handleToggleMinimized
  }} /> : null;
}
