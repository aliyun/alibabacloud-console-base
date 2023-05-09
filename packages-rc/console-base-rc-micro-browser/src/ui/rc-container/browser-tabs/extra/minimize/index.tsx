import React from 'react';

import {
  useProps,
  useHandleToggleMinimized
} from '../../../../../model';
import intl from '../../../../intl';
import ExtraButton from '../extra-button';

export default function ButtonMinimize(): JSX.Element | null {
  const {
    minimizable
  } = useProps();
  const handleToggleMinimized = useHandleToggleMinimized();
  
  return minimizable ? <ExtraButton {...{
    spm: 'minimize',
    icon: 'minimize',
    title: intl('op:minimize'),
    onClick: handleToggleMinimized
  }} /> : null;
}
