import React from 'react';
import {
  object,
  boolean
} from '@storybook/addon-knobs';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import Rc from '../../src';
import PkgInfo from '../pkg-info';

const POEM = '古诗一首';

export default function DemoDefault(): JSX.Element {
  const o = object('o', {
    hello: 'world',
    yuck: 'fou',
    [POEM]: '丽丽一上船 意思有空刃 业火十八家 充分测于是 - 不要想歪了 - 离离原上草 一岁一枯荣 野火烧不尽 春风吹又生',
    empty: null
  });
  const horizontal = boolean('props.horizontal', false);
  const ignoreEmpty = boolean('props.ignoreEmpty', false);
  const wrapValue = boolean('props.wrapValue', false);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <Rc {...{
      o,
      horizontal,
      ignoreEmpty,
      wrapValue
    }} />
  </>;
}
