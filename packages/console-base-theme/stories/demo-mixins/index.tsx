import React from 'react';

import {
  H1
} from '@alicloud/demo-rc-elements';

import ThemeSwitcher from '../rc/theme-switcher';

import MixinText from './mixin-text';
import MixinBg from './mixin-bg';
import MixinBorder from './mixin-border';
import MixinBorderRadius from './mixin-border-radius';
import MixinShadow from './mixin-shadow';
import MixinTypo from './mixin-typo';
import MixinLink from './mixin-link';
import MixinInput from './mixin-input';
import MixinButton from './mixin-button';

export default function DemoMixins(): JSX.Element {
  return <>
    <H1>mixins tests</H1>
    <ThemeSwitcher />
    <MixinText />
    <MixinBg />
    <MixinBorder />
    <MixinBorderRadius />
    <MixinShadow />
    <MixinTypo />
    <MixinLink />
    <MixinInput />
    <MixinButton />
  </>;
}

export {
  MixinText,
  MixinBg,
  MixinBorder,
  MixinBorderRadius,
  MixinShadow,
  MixinTypo,
  MixinLink,
  MixinInput,
  MixinButton
};
