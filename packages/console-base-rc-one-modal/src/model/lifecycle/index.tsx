import React from 'react';

import WindowResize from './window-resize';
import PushBody from './push-body';
import DisableUserSelect from './disable-user-select';

export default function Lifecycle(): JSX.Element {
  return <>
    <WindowResize />
    <PushBody />
    <DisableUserSelect />
  </>;
}