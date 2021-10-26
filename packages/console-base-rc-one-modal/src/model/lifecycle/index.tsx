import React from 'react';

import ObserveBodyResize from './observe-document-resize';
import PushBody from './push-body';
import DisableUserSelect from './disable-user-select';

export default function Lifecycle(): JSX.Element {
  return <>
    <PushBody />
    <DisableUserSelect />
    <ObserveBodyResize />
  </>;
}