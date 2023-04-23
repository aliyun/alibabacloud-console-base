import React from 'react';

import Icon from '@alicloud/console-base-rc-icon';

import {
  useVisibleBottom,
  useHandleGotoBottom
} from '../../../model';
import {
  GoButton
} from '../../rc';

export default function GoBottom(): JSX.Element | null {
  const goBottomVisible = useVisibleBottom();
  const handleGotoBottom = useHandleGotoBottom();
  
  return <GoButton {...{
    label: <Icon {...{
      type: 'go-top',
      rotate: 180
    }} />,
    visible: goBottomVisible,
    onClick: handleGotoBottom
  }} />;
}
