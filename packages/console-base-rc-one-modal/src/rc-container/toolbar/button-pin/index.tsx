import React from 'react';

import Icon from '@alicloud/console-base-rc-icon';

import {
  EModalMode
} from '../../../const';
import intl from '../../../intl';
import {
  useProps,
  useMode,
  useOnPin,
  useStickRightActive
} from '../../../model';
import ControlButton from '../../../rc/control-button';

export default function ButtonPin(): JSX.Element | null {
  const {
    pinnable
  } = useProps();
  const mode = useMode();
  const visible = useStickRightActive();
  const active = mode === EModalMode.TO_THE_RIGHT_PINNED;
  const onPin = useOnPin();
  
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
