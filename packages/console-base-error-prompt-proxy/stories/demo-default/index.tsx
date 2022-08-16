import React from 'react';

import DemoHelperErrorPrompt, {
  ErrorArg,
  getErrorExtra
} from '@alicloud/console-base-demo-helper-error-prompt';

import errorPrompt, {
  ErrorPromptArg
} from '../../src';

import ProxyMock from './proxy-mock';

function alertError(errors: ErrorArg[]): void {
  errors.forEach(err => errorPrompt(err as ErrorPromptArg, getErrorExtra));
}

export default function DemoDefault(): JSX.Element {
  return <>
    <ProxyMock />
    <DemoHelperErrorPrompt {...{
      onPrompt: alertError
    }} />
  </>;
}
