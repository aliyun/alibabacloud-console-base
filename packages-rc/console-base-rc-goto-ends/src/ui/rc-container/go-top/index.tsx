import React from 'react';

import Icon from '@alicloud/console-base-rc-icon';

import {
  useVisibleTop,
  useHandleGotoTop
} from '../../../model';
import {
  GoButton
} from '../../rc';

export default function GoTop(): JSX.Element | null {
  const goTopVisible = useVisibleTop();
  const handleGotoTop = useHandleGotoTop();
  
  return <GoButton {...{
    label: <Icon {...{
      type: 'go-top'
    }} />,
    visible: goTopVisible,
    onClick: handleGotoTop
  }} />;
}
