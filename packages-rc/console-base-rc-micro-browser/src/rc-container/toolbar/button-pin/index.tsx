import React from 'react';

import Icon from '@alicloud/console-base-rc-icon';

import intl from '../../../intl';
import {
  EMicroBrowserMode,
  useProps,
  useMode,
  useHandlePin,
  useStickRightActive
} from '../../../model';
import ControlButton from '../../../rc/control-button';

export default function ButtonPin(): JSX.Element | null {
  const {
    pinnable
  } = useProps();
  const mode = useMode();
  const visible = useStickRightActive();
  const active = mode === EMicroBrowserMode.TO_THE_RIGHT_PINNED;
  const onPin = useHandlePin();
  
  return pinnable && visible ? <ControlButton {...{
    spm: 'max',
    label: <Icon {...{
      type: 'pin',
      rotate: active ? 45 : 0
    }} />,
    title: intl(active ? 'op:pin_to_the_right_exit' : 'op:pin_to_the_right'),
    active,
    onClick: onPin
  }} /> : null;
}
