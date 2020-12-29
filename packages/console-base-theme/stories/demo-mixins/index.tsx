import React from 'react';

import {
  H1
} from '@alicloud/demo-rc-elements';

import GlobalStyle from '../../src';

import MixinText from './mixin-text';
import MixinBg from './mixin-bg';
import MixinBorder from './mixin-border';
import MixinShadow from './mixin-shadow';
import MixinLink from './mixin-link';
import MixinInput from './mixin-input';
import MixinButton from './mixin-button';

export default function DemoMixins(): JSX.Element {
  return <>
    <GlobalStyle />
    <H1>mixins tests</H1>
    <MixinText />
    <MixinBg />
    <MixinBorder />
    <MixinShadow />
    <MixinLink />
    <MixinInput />
    <MixinButton />
  </>;
}
