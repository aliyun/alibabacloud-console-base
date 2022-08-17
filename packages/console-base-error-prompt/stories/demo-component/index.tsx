import React, {
  useState,
  useCallback
} from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import DemoHelperErrorPrompt, {
  ErrorArg
} from '@alicloud/console-base-demo-helper-error-prompt';

import {
  ErrorPrompt,
  ErrorPromptArg
} from '../../src';
import PkgInfo from '../pkg-info';

export default function DemoDefault(): JSX.Element {
  const [stateErrors, setStateErrors] = useState<ErrorArg[]>([]);
  const onClose = useCallback(() => setStateErrors([]), []);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <DemoHelperErrorPrompt {...{
      onPrompt: setStateErrors
    }} />
    <ErrorPrompt {...{
      items: stateErrors.map(error => ({
        error: error as unknown as ErrorPromptArg
      })),
      onClose
    }} />
  </>;
}
