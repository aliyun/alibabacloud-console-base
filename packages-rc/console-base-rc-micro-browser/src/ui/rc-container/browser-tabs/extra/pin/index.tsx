import React from 'react';

import {
  useHandleTogglePinned,
  usePinned
} from '../../../../../model';
import intl from '../../../../intl';
import ExtraButton from '../extra-button';

export default function ButtonStickRight(): JSX.Element {
  const pinned = usePinned();
  const handleTogglePinned = useHandleTogglePinned();
  
  return <ExtraButton {...{
    spm: 'pin',
    icon: 'stick-right',
    title: intl(pinned ? 'op:to_the_right_exit' : 'op:to_the_right'),
    onClick: handleTogglePinned
  }} />;
}
