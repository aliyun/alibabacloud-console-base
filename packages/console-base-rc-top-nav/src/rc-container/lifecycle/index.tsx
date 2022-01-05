import React from 'react';

import {
  useProps
} from '../../model';

import GlobalStyleForFixed from './global-style-for-fixed';
import ClearDockActiveTimer from './clear-dock-active-timer';

export default function Lifecycle(): JSX.Element | null {
  const {
    fixed
  } = useProps();
  
  return <>
    {fixed ? <GlobalStyleForFixed /> : null}
    <ClearDockActiveTimer />
  </>;
}
