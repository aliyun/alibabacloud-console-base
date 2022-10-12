import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  Button
} from '@alicloud/demo-rc-elements';

import {
  open,
  slide,
  slideUp,
  alert,
  confirm
} from '../../../src';

import DialogContent from './dialog-content';

export default function ZIndex(): JSX.Element {
  const [stateConsoleBase, setStateConsoleBase] = useState<boolean>(false);
  
  const handleInitConsoleBase = useCallback(() => {
    setStateConsoleBase(true);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CONSOLE_BASE_SETTINGS = {
      IFRAME_MODE: 'full'
    };
    
    const el = document.createElement('script');
    
    el.src = '//g.alicdn.com/aliyun/console-base-loader/index.js';
    
    document.head.appendChild(el);
  }, [setStateConsoleBase]);
  
  return <>
    <H1>Z-INDEX</H1>
    <Button disabled={stateConsoleBase} onClick={handleInitConsoleBase}>添加 ConsoleBase</Button>
    <Button {...{
      onClick: () => open(<DialogContent />)
    }}>open</Button>
    <Button {...{
      onClick: () => open({
        backdrop: false,
        content: <DialogContent />
      })
    }}>backdrop: false</Button>
    <Button {...{
      onClick: () => slide(<DialogContent />)
    }}>slide</Button>
    <Button {...{
      onClick: () => slideUp(<DialogContent />)
    }}>slideUp</Button>
    <Button {...{
      onClick: () => alert(<DialogContent />)
    }}>alert</Button>
    <Button {...{
      onClick: () => confirm(<DialogContent />)
    }}>confirm</Button>
  </>;
}
