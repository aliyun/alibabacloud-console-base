import React from 'react';

import {
  H1,
  Pre
} from '@alicloud/demo-rc-elements';

import generateCodeMixinShadow from '../util/generate-code-mixin-shadow';

export default function GeneratorMixinShadow(): JSX.Element {
  return <>
    <H1>src/mixin/shadow.ts</H1>
    <Pre>{generateCodeMixinShadow()}</Pre>
  </>;
}
