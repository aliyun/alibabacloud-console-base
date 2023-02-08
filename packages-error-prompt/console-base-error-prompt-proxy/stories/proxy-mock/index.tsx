import React, {
  useState,
  useEffect
} from 'react';

import {
  setGlobalVar,
  setProxyErrorPrompt
} from '@alicloud/console-base-global';
import {
  forApp,
  ready,
  onPromptError
} from '@alicloud/console-base-messenger';
import errorPrompt, {
  ErrorDetailedInfo,
  ErrorPromptExtra
} from '@alicloud/console-base-error-prompt';
import {
  InputSwitch
} from '@alicloud/demo-rc-elements';

interface IMessengerPayload {
  error: ErrorDetailedInfo;
  extra?: ErrorPromptExtra;
}

setGlobalVar(forApp);
ready();

export default function ProxyMock(): JSX.Element {
  const [stateProxyMocked, setStateProxyMocked] = useState<boolean>(true);
  
  // 这里的逻辑实际上就是 console-base-plugin-error-prompt 的实现
  useEffect(() => setProxyErrorPrompt(stateProxyMocked), [stateProxyMocked]);
  
  useEffect(() => onPromptError<IMessengerPayload>(async (o): Promise<void> => {
    if (!o) {
      return;
    }
    
    errorPrompt(o.error, {
      title: '错误提示被接管啦！！', // 会导致 extra 中默认逻辑的 title 出不来....但不要紧，因为，实际上接管的时候不会有这个覆盖
      ...o.extra
    });
  }), []);
  
  return <InputSwitch {...{
    label: '测试专用的 proxy 实现',
    value: stateProxyMocked,
    onChange: setStateProxyMocked
  }} />;
}
