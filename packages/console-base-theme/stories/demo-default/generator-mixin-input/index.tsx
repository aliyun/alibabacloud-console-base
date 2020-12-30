import React from 'react';

import {
  H1,
  Pre
} from '@alicloud/demo-rc-elements';

import generateCodeMixinInput from '../util/generate-code-mixin-input';

export default function GeneratorMixinInput(): JSX.Element {
  return <>
    <H1>src/mixin/input.ts</H1>
    <Pre>{generateCodeMixinInput()}</Pre>
  </>;
}
