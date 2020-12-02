import React, {
  ChangeEvent,
  useCallback
} from 'react';

import {
  H3
} from '@alicloud/demo-rc-elements';
import {
  forApp
} from '@alicloud/console-base-messenger';

export default function ToggleVisible(): JSX.Element {
  const handleToggleVisible = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: {
        checked
      }
    } = e;
    
    forApp.toggleResourceGroup(checked);
  }, []);
  
  return <>
    <H3>forApp.toggleResourceGroup(true/false)</H3>
    <label><input type="checkbox" onChange={handleToggleVisible} defaultChecked />展示 / 隐藏</label>
  </>;
}
