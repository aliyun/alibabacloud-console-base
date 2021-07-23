import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';

import pkgInfo from '../package.json';

import GeneratorGlobalStyle from './rc/generator-global-style';
import GeneratorLess from './rc/generator-less';
import GeneratorMixinText from './rc/generator-mixin-text';
import GeneratorMixinBg from './rc/generator-mixin-bg';
import GeneratorMixinBorder from './rc/generator-mixin-border';
import GeneratorMixinBorderRadius from './rc/generator-mixin-border-radius';
import GeneratorMixinShadow from './rc/generator-mixin-shadow';
import GeneratorMixinLink from './rc/generator-mixin-link';
import GeneratorMixinInput from './rc/generator-mixin-input';
import GeneratorMixinButton from './rc/generator-mixin-button';
import ThemeSwitcher from './rc/theme-switcher';
import MixinText from './rc/mixin-text';
import MixinBg from './rc/mixin-bg';
import MixinBorder from './rc/mixin-border';
import MixinBorderRadius from './rc/mixin-border-radius';
import MixinShadow from './rc/mixin-shadow';
import MixinTypo from './rc/mixin-typo';
import MixinLink from './rc/mixin-link';
import MixinInput from './rc/mixin-input';
import MixinButton from './rc/mixin-button';
import MixinPst from './rc/mixin-pst';

storiesOf(pkgInfo.name, module)
    .addDecorator(withKnobs)
    .add('default', () => <div>这不仅仅是一个 demo！还是代码生成器 <span role="img" aria-label="factory">🏭</span>。</div>)
    .add('gen-global-style', () => <GeneratorGlobalStyle />)
    .add('gen-less', () => <GeneratorLess />)
    .add('gen-mixin-text', () => <GeneratorMixinText />)
    .add('gen-mixin-bg', () => <GeneratorMixinBg />)
    .add('gen-mixin-border', () => <GeneratorMixinBorder />)
    .add('gen-mixin-border-radius', () => <GeneratorMixinBorderRadius />)
    .add('gen-mixin-shadow', () => <GeneratorMixinShadow />)
    .add('gen-mixin-link', () => <GeneratorMixinLink />)
    .add('gen-mixin-input', () => <GeneratorMixinInput />)
    .add('gen-mixin-button', () => <GeneratorMixinButton />)
    .add('mixin-text', () => <>
      <ThemeSwitcher />
      <MixinText />
    </>)
    .add('mixin-bg', () => <>
      <ThemeSwitcher />
      <MixinBg />
    </>)
    .add('mixin-border', () => <>
      <ThemeSwitcher />
      <MixinBorder />
    </>)
    .add('mixin-border-radius', () => <>
      <ThemeSwitcher />
      <MixinBorderRadius />
    </>)
    .add('mixin-shadow', () => <>
      <ThemeSwitcher />
      <MixinShadow />
    </>)
    .add('mixin-typo', () => <>
      <ThemeSwitcher />
      <MixinTypo />
    </>)
    .add('mixin-link', () => <>
      <ThemeSwitcher />
      <MixinLink />
    </>)
    .add('mixin-input', () => <>
      <ThemeSwitcher />
      <MixinInput />
    </>)
    .add('mixin-button', () => <>
      <ThemeSwitcher />
      <MixinButton />
    </>)
    .add('mixin-pst', () => <>
      <ThemeSwitcher />
      <MixinPst />
    </>);
