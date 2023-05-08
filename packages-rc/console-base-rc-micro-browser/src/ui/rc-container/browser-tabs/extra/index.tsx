import React from 'react';

import Minimize from './minimize';
import Pin from './pin';
import X from './x';

export default function Extra(): JSX.Element {
  return <>
    <Minimize />
    <Pin />
    <X />
  </>;
}
