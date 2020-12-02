import React, {
  useEffect
} from 'react';

import {
  H2,
  P
} from '@alicloud/demo-rc-elements';
import {
  forConsoleBase
} from '@alicloud/console-base-messenger';

export default function MessengerReady(): JSX.Element {
  useEffect(() => {
    forConsoleBase.ready();
  }, []);
  
  return <>
    <H2>forConsoleBase.ready()</H2>
    <P>只有 <code>forConsoleBase.ready()</code> 后才可以进行交互，在组件测试中需要手动调用。</P>
  </>;
}
