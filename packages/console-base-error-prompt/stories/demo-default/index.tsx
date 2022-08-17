import React from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import DemoHelperErrorPrompt, {
  ErrorArg,
  getErrorExtra
} from '@alicloud/console-base-demo-helper-error-prompt';

import errorPrompt, {
  ErrorPromptArg
} from '../../src';
import PkgInfo from '../pkg-info';

function alertError(errors: ErrorArg[]): void {
  errors.forEach(err => errorPrompt(err as ErrorPromptArg, getErrorExtra));
}

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <DemoHelperErrorPrompt {...{
      onPrompt: alertError
    }} />
  </>;
}
