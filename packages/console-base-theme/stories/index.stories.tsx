import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';

import pkgInfo from '../package.json';

import DemoDefault, {
  GeneratorGlobalStyle,
  GeneratorLess,
  GeneratorMixinText,
  GeneratorMixinBg,
  GeneratorMixinBorder,
  GeneratorMixinShadow,
  GeneratorMixinLink,
  GeneratorMixinInput,
  GeneratorMixinButton
} from './demo-default';
import DemoColorScale from './demo-color-scale';
import DemoColorConversion from './demo-color-conversion';
import DemoMixins, {
  MixinBaseText,
  MixinBaseBg,
  MixinBaseBorder,
  MixinBaseShadow,
  MixinTypo,
  MixinLink,
  MixinInput,
  MixinButton
} from './demo-mixins';

storiesOf(pkgInfo.name, module)
    .addDecorator(withKnobs)
    .add('default', () => <DemoDefault />)
    .add('gen-global-style', () => <GeneratorGlobalStyle />)
    .add('gen-less', () => <GeneratorLess />)
    .add('gen-mixin-text', () => <GeneratorMixinText />)
    .add('gen-mixin-bg', () => <GeneratorMixinBg />)
    .add('gen-mixin-border', () => <GeneratorMixinBorder />)
    .add('gen-mixin-shadow', () => <GeneratorMixinShadow />)
    .add('gen-mixin-link', () => <GeneratorMixinLink />)
    .add('gen-mixin-input', () => <GeneratorMixinInput />)
    .add('gen-mixin-button', () => <GeneratorMixinButton />)
    .add('mixins', () => <DemoMixins />)
    .add('mixin-base-text', () => <MixinBaseText />)
    .add('mixin-base-bg', () => <MixinBaseBg />)
    .add('mixin-base-border', () => <MixinBaseBorder />)
    .add('mixin-base-shadow', () => <MixinBaseShadow />)
    .add('mixin-typo', () => <MixinTypo />)
    .add('mixin-link', () => <MixinLink />)
    .add('mixin-input', () => <MixinInput />)
    .add('mixin-button', () => <MixinButton />)
    .add('color-scale', () => <DemoColorScale />)
    .add('color-conversion', () => <DemoColorConversion />);
