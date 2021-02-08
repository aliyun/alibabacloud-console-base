import React from 'react';

import {
  H1,
  P
} from '@alicloud/demo-rc-elements';

import GeneratorGlobalStyle from './generator-global-style';
import GeneratorLess from './generator-less';
import GeneratorMixinText from './generator-mixin-text';
import GeneratorMixinBg from './generator-mixin-bg';
import GeneratorMixinBorder from './generator-mixin-border';
import GeneratorMixinBorderRadius from './generator-mixin-border-radius';
import GeneratorMixinShadow from './generator-mixin-shadow';
import GeneratorMixinLink from './generator-mixin-link';
import GeneratorMixinInput from './generator-mixin-input';
import GeneratorMixinButton from './generator-mixin-button';

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>生成 COLOR</H1>
    <P>这不仅仅是一个 demo！还是代码生成器 <span role="img" aria-label="factory">🏭</span>。</P>
    <GeneratorGlobalStyle />
    <GeneratorLess />
    <GeneratorMixinText />
    <GeneratorMixinBg />
    <GeneratorMixinBorder />
    <GeneratorMixinBorderRadius />
    <GeneratorMixinShadow />
    <GeneratorMixinLink />
    <GeneratorMixinInput />
    <GeneratorMixinButton />
  </>;
}

export {
  GeneratorGlobalStyle,
  GeneratorLess,
  GeneratorMixinText,
  GeneratorMixinBg,
  GeneratorMixinBorder,
  GeneratorMixinBorderRadius,
  GeneratorMixinShadow,
  GeneratorMixinLink,
  GeneratorMixinInput,
  GeneratorMixinButton
};
