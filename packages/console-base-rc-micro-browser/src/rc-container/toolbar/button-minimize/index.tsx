import React from 'react';
import styled from 'styled-components';

import intl from '../../../intl';
import {
  useProps,
  useHandleMinimize
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
  const {
    minimizable
  } = useProps();
  const onMinimize = useHandleMinimize();
  
  return minimizable ? <ControlButton {...{
    spm: 'min',
    label: <ScIconMinimize />,
    title: intl('op:minimize'),
    onClick: onMinimize
  }} /> : null;
}
