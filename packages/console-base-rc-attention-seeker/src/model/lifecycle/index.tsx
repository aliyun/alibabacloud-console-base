import React from 'react';

import ModifyElementClass from './modify-element-class';
import CalcRect from './calc-rect';
import WatchResize from './watch-resize';

export default function Lifecycle(): JSX.Element {
  return <>
    <ModifyElementClass />
    <CalcRect />
    <WatchResize />
  </>;
}
