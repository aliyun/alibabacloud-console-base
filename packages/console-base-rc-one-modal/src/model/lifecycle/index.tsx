import React from 'react';

import WindowResize from './window-resize';
import PushBody from './push-body';
import BorderDragging from './border-drag';

export default function Lifecycle(): JSX.Element {
  return <>
    <BorderDragging />
    <WindowResize />
    <PushBody />
  </>;
}