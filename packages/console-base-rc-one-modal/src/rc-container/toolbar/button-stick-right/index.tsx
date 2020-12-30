import React, {
  useCallback
} from 'react';

import Icon from '@alicloud/console-base-rc-icon';

import {
  EModalMode
} from '../../../const';
import intl from '../../../intl';
import {
  useMode,
  useDispatchChangeMode
} from '../../../model';
import ControlButton from '../../../rc/control-button';

export default function ButtonNail(): JSX.Element {
  const mode = useMode();
  const dispatchChangeMode = useDispatchChangeMode();
  const active = mode === EModalMode.TO_THE_RIGHT || mode === EModalMode.TO_THE_RIGHT_PINNED;
  const handleTogglePinned = useCallback(() => dispatchChangeMode(active ? EModalMode.FREE : EModalMode.TO_THE_RIGHT), [active, dispatchChangeMode]);
  
  return <ControlButton {...{
    spm: 'to_the_right',
    label: <Icon type="stick-right" />,
    title: intl(active ? 'op:to_the_right_exit' : 'op:to_the_right'),
    active,
    onClick: handleTogglePinned
  }} />;
}
