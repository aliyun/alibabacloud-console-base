import React from 'react';
import styled from 'styled-components';

import {
  useProps,
  useHandleMinimize
} from '../../../../../model';
import intl from '../../../../intl';
import ExtraButton from '../extra-button';

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
  
  return minimizable ? <ExtraButton {...{
    spm: 'minimize',
    label: <ScIconMinimize />,
    title: intl('op:minimize'),
    onClick: onMinimize
  }} /> : null;
}
