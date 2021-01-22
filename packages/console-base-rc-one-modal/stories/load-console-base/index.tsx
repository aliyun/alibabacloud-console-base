import React, {
  useState,
  useCallback
} from 'react';

import {
  Button
} from '@alicloud/demo-rc-elements';

export default function LoadConsoleBase(): JSX.Element {
  const [stateConsoleBase, setStateConsoleBase] = useState<boolean>(false);
  
  const handleLoadConsoleBase = useCallback(() => {
    setStateConsoleBase(true);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CONSOLE_BASE_SETTINGS = {
      IFRAME_MODE: 'full'
    };
    
    const el = document.createElement('script');
    
    el.src = '//g.alicdn.com/aliyun/console-base-loader/index.js';
    
    document.head.appendChild(el);
  }, [setStateConsoleBase]);
  
  return <Button onClick={handleLoadConsoleBase} disabled={stateConsoleBase}>ConsoleBase</Button>;
}
