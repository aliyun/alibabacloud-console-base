import React from 'react';
import {
  object,
  boolean
} from '@storybook/addon-knobs';

import Rc from '../../src';

const POEM = '古诗一首';

export default function DemoDefault(): JSX.Element {
  const o = object('o', {
    hello: 'world',
    fuck: 'shit',
    [POEM]: '丽丽一上床 意思有空日 业火十八禁 充分草于是 - 不要想歪了 - 离离原上草 一岁一枯荣 野火烧不尽 春风吹又生',
    empty: null
  });
  const horizontal = boolean('props.horizontal', false);
  const ignoreEmpty = boolean('props.ignoreEmpty', false);
  const wrapValue = boolean('props.wrapValue', false);
  
  return <Rc {...{
    o,
    horizontal,
    ignoreEmpty,
    wrapValue
  }} />;
}
