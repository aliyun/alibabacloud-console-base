import React, {
  useCallback
} from 'react';

import Icon from '@alicloud/console-base-rc-icon';

import {
  EModalMode
} from '../../../const';
import intl from '../../../intl';
import {
  usePropPinnable,
  useMode,
  useDispatchChangeMode
} from '../../../model';
import ControlButton from '../../../rc/control-button';

export default function ButtonPin(): JSX.Element | null {
  const pinnable = usePropPinnable();
  const mode = useMode();
  const dispatchChangeMode = useDispatchChangeMode();
  const visible = mode === EModalMode.TO_THE_RIGHT || mode === EModalMode.TO_THE_RIGHT_PINNED;
  const active = mode === EModalMode.TO_THE_RIGHT_PINNED;
  const handleTogglePinned = useCallback(() => dispatchChangeMode(active ? EModalMode.TO_THE_RIGHT : EModalMode.TO_THE_RIGHT_PINNED), [active, dispatchChangeMode]);
  
  return pinnable && visible ? <ControlButton {...{
    spm: 'max',
    label: <Icon {...{
      type: 'pin',
      rotate: active ? 45 : 0
    }} />,
    title: intl(active ? 'op:pin_to_the_right_exit' : 'op:pin_to_the_right'),
    active,
    onClick: handleTogglePinned
  }} /> : null;
}
