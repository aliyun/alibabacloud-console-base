import React from 'react';

import {
  useProps,
  useHandleMinimize
} from '../../../../../model';
import intl from '../../../../intl';
import ExtraButton from '../extra-button';

export default function ButtonMinimize(): JSX.Element | null {
  const {
    minimizable
  } = useProps();
  const onMinimize = useHandleMinimize();
  
  return minimizable ? <ExtraButton {...{
    spm: 'minimize',
    icon: 'minimize',
    title: intl('op:minimize'),
    onClick: onMinimize
  }} /> : null;
}
