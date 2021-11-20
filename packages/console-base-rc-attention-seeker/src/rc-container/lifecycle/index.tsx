import React from 'react';

import ModifyElementClass from './modify-element-class';
import CalcRect from './calc-rect';
import BindCloseToElement from './bind-close-to-element';
import WatchTimestamp from './watch-timestamp';
import ObserveResize from './observe-resize';

export default function Lifecycle(): JSX.Element {
  return <>
    <ModifyElementClass />
    <CalcRect />
    <BindCloseToElement />
    <WatchTimestamp />
    <ObserveResize />
  </>;
}
