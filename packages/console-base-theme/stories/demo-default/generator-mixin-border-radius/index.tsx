import React from 'react';

import {
  H1,
  Pre
} from '@alicloud/demo-rc-elements';

import generateCodeMixinBorderRadius from '../../util/generate-code-mixin-border-radius';

export default function GeneratorMixinBorderRadius(): JSX.Element {
  return <>
    <H1>src/mixin/border-radius.ts</H1>
    <Pre>{generateCodeMixinBorderRadius()}</Pre>
  </>;
}
