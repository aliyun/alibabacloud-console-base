import React from 'react';

import Stack from './stack';
import DidMount from './did-mount';
import AutoFocus from './auto-focus';
import AdjustHeight from './adjust-height';
import FocusBack from './focus-back';

// stack 需要放在第一个
export default function Lifecycle(): JSX.Element {
  return <>
    <Stack />
    <DidMount />
    <AutoFocus />
    <AdjustHeight />
    <FocusBack />
  </>;
}
