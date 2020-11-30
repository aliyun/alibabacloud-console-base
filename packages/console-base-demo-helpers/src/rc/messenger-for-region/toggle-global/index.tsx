import React, {
  ChangeEvent,
  useCallback
} from 'react';

import {
  H3,
  P
} from '@alicloud/demo-rc-elements';
import {
  forApp
} from '@alicloud/console-base-messenger';

export default function ToggleGlobal(): JSX.Element {
  const handleToggleGlobal = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: {
        checked
      }
    } = e;
    
    forApp.toggleRegionGlobal(checked);
  }, []);
  
  return <>
    <H3>forApp.toggleRegionGlobal(true/false)</H3>
    <P>切换「全球」模式（仅展示用）</P>
    <label><input type="checkbox" onChange={handleToggleGlobal} />全球</label>
  </>;
}
