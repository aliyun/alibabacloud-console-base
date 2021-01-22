import React from 'react';

import {
  H1,
  Pre
} from '@alicloud/demo-rc-elements';

import generateCodeMixinBorder from '../../util/generate-code-mixin-border';

export default function GeneratorMixinBorder(): JSX.Element {
  return <>
    <H1>src/mixin/border.ts</H1>
    <Pre>{generateCodeMixinBorder()}</Pre>
  </>;
}
