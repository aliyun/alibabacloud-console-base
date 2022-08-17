import React, {
  useState
} from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import CodeMirror from '../../src';
import PkgInfo from '../pkg-info';

const JSON_STR = JSON.stringify({
  title: 'I Am a Title',
  arr: [1, '2', true, {
    boshit: 'is always right'
  }],
  poet: '离离原上草 一岁一枯荣 野火烧不尽 春风吹又生'
}, null, 2);

export default function DemoDefault(): JSX.Element {
  const [stateValue, setStateValue] = useState<string>(JSON_STR);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <CodeMirror {...{
      conf: {
        mode: 'application/json'
      },
      value: stateValue,
      onChange: setStateValue
    }} />
  </>;
}
