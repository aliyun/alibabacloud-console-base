import React, {
  ChangeEvent,
  useState,
  useCallback
} from 'react';

import {
  H2
} from '@alicloud/demo-rc-elements';
import {
  forApp
} from '@alicloud/console-base-messenger';

export default function MessengerForTopNav(): JSX.Element {
  const [stateVisible, setStateVisible] = useState<boolean>(true);
  
  const handleToggleVisible = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: {
        checked
      }
    } = e;
    
    setStateVisible(checked);
    forApp.toggleTopNav(checked);
  }, []);
  
  return <>
    <H2>顶栏</H2>
    <label><input type="checkbox" onChange={handleToggleVisible} checked={stateVisible} />展示 / 隐藏</label>
  </>;
}
