import React from 'react';

import DemoHelperErrorPrompt from '@alicloud/console-base-demo-helper-error-prompt';

import errorPrompt, {
  ErrorPromptArg
} from '../../src';

import ProxyMock from './proxy-mock';

function alertError(o?: ErrorPromptArg): Promise<void> {
  return errorPrompt(o, error => {
    if (error.code && ['YOUR_SISTER_NOT_SIGNED_IN', 'I_FUCKING_NOT_SIGNED_IN'].includes(error.code)) {
      return {
        // title: '你妹登录呢',
        button: {
          label: '唉，登录吧',
          href: '/'
        }
      };
    }
  });
}

export default function DemoDefault(): JSX.Element {
  return <>
    <ProxyMock />
    <DemoHelperErrorPrompt {...{
      onPrompt: alertError
    }} />
  </>;
}
