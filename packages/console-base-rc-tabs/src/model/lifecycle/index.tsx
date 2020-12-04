import React from 'react';

import PruneClosed from './prune-closed';
import AdjustNavWidth from './adjust-nav-width';

export default function Lifecycle(): JSX.Element {
  return <>
    <PruneClosed />
    <AdjustNavWidth />
  </>;
}
