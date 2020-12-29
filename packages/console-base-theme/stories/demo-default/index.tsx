import React from 'react';

import {
  H1,
  H2,
  Pre
} from '@alicloud/demo-rc-elements';

import generateCodeGlobalStyle from './util/generate-code-global-style';
import generateCodeCssVars from './util/generate-code-css-vars';
import generateCodeMixinText from './util/generate-code-mixin-text';
import generateCodeMixinBorder from './util/generate-code-mixin-border';
import generateCodeMixinBg from './util/generate-code-mixin-bg';
import generateCodeMixinShadow from './util/generate-code-mixin-shadow';
import generateCodeMixinInput from './util/generate-code-mixin-input';
import generateCodeMixinLink from './util/generate-code-mixin-link';

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>生成 COLOR</H1>
    <H2>src/theme-default/global-style.ts</H2>
    <Pre>{generateCodeGlobalStyle()}</Pre>
    <H2>doc/css/console-base.less</H2>
    <Pre>{generateCodeCssVars()}</Pre>
    <H2>src/mixin/text.ts</H2>
    <Pre>{generateCodeMixinText()}</Pre>
    <H2>src/mixin/border.ts</H2>
    <Pre>{generateCodeMixinBorder()}</Pre>
    <H2>src/mixin/bg.ts</H2>
    <Pre>{generateCodeMixinBg()}</Pre>
    <H2>src/mixin/shadow.ts</H2>
    <Pre>{generateCodeMixinShadow()}</Pre>
    <H2>src/mixin/link.ts</H2>
    <Pre>{generateCodeMixinLink()}</Pre>
    <H2>src/mixin/input.ts</H2>
    <Pre>{generateCodeMixinInput()}</Pre>
  </>;
}
