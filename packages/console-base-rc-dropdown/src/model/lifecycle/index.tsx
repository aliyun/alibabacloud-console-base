import React from 'react';

import OnDocKeydown from './on-doc-keydown';
import RefreshDropPosition from './refresh-drop-position';

export default function Lifecycle(): JSX.Element {
  return <>
    <OnDocKeydown />
    <RefreshDropPosition />
  </>;
}
