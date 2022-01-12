import React from 'react';

import OnDocKeydown from './on-doc-keydown';
import HideWhenDisable from './hide-when-disable';

export default function Lifecycle(): JSX.Element {
  return <>
    <HideWhenDisable />
    <OnDocKeydown />
  </>;
}
