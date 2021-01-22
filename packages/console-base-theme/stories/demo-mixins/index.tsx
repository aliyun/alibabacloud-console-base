import React from 'react';

import {
  H1
} from '@alicloud/demo-rc-elements';

import ThemeSwitcher from '../rc/theme-switcher';

import MixinBaseText from './mixin-base-text';
import MixinBaseBg from './mixin-base-bg';
import MixinBaseBorder from './mixin-base-border';
import MixinBaseShadow from './mixin-base-shadow';
import MixinTypo from './mixin-typo';
import MixinLink from './mixin-link';
import MixinInput from './mixin-input';
import MixinButton from './mixin-button';

export default function DemoMixins(): JSX.Element {
  return <>
    <H1>mixins tests</H1>
    <ThemeSwitcher />
    <MixinBaseText />
    <MixinBaseBg />
    <MixinBaseBorder />
    <MixinBaseShadow />
    <MixinTypo />
    <MixinLink />
    <MixinInput />
    <MixinButton />
  </>;
}

export {
  MixinBaseText,
  MixinBaseBg,
  MixinBaseBorder,
  MixinBaseShadow,
  MixinTypo,
  MixinLink,
  MixinInput,
  MixinButton
};
