import React from 'react';

import ModifyElementClass from './modify-element-class';
import CalcRect from './calc-rect';
import WatchResize from './watch-resize';
import WatchTimestamp from './watch-timestamp';

export default function Lifecycle(): JSX.Element {
  return <>
    <ModifyElementClass />
    <CalcRect />
    <WatchResize />
    <WatchTimestamp />
  </>;
}
