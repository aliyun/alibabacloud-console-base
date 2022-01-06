import React, {
  useState
} from 'react';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';
import {
  Button
} from '@alicloud/demo-rc-elements';

import Tooltip from '../../src';

export default function DemoDefault(): JSX.Element {
  const [stateDomButton, setStateDomButton] = useState<HTMLElement | null>(null);
  
  return <>
    <ThemeSwitcher />
    <Button ref={setStateDomButton}>i button</Button>
    <Tooltip {...{
      trigger: stateDomButton,
      content: 'i tooltip'
    }} />
  </>;
}
