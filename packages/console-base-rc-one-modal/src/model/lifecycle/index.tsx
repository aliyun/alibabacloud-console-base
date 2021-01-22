import React from 'react';

import WindowResize from './window-resize';
import PushBody from './push-body';

export default function Lifecycle(): JSX.Element {
  return <>
    <WindowResize />
    <PushBody />
  </>;
}
