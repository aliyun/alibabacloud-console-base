import React from 'react';

import DidMount from './did-mount';
import Stack from './stack';
import AdjustHeight from './adjust-height';

export default function Lifecycle(): JSX.Element {
  return <>
    <DidMount />
    <Stack />
    <AdjustHeight />
  </>;
}
