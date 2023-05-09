import React from 'react';

import {
  MicroBrowserMode,
  useMode,
  useHandleTogglePinned
} from '../../../../../model';
import intl from '../../../../intl';
import ExtraButton from '../extra-button';

export default function ButtonStickRight(): JSX.Element {
  const mode = useMode();
  const handleTogglePinned = useHandleTogglePinned();
  
  return <ExtraButton {...{
    spm: 'pin',
    icon: 'stick-right',
    title: intl(mode === MicroBrowserMode.PINNED ? 'op:to_the_right_exit' : 'op:to_the_right'),
    onClick: handleTogglePinned
  }} />;
}
