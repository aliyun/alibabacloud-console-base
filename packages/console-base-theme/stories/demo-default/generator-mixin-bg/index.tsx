import React from 'react';

import {
  H1,
  Pre
} from '@alicloud/demo-rc-elements';

import generateCodeMixinBg from '../../util/generate-code-mixin-bg';

export default function GeneratorMixinBg(): JSX.Element {
  return <>
    <H1>src/mixin/bg.ts</H1>
    <Pre>{generateCodeMixinBg()}</Pre>
  </>;
}
