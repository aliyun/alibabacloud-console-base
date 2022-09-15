import React from 'react';

import Icon from '@alicloud/console-base-rc-icon';

import intl from '../../../intl';
import {
  useHandleStickRight,
  useStickRightActive
} from '../../../model';
import ControlButton from '../../../rc/control-button';

export default function ButtonStickRight(): JSX.Element {
  const active = useStickRightActive();
  const onStickRight = useHandleStickRight();
  
  return <ControlButton {...{
    spm: 'to_the_right',
    label: <Icon type="stick-right" />,
    title: intl(active ? 'op:to_the_right_exit' : 'op:to_the_right'),
    active,
    onClick: onStickRight
  }} />;
}
