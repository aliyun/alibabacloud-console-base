import React from 'react';

import {
  H1,
  Pre
} from '@alicloud/demo-rc-elements';

import generateCodeMixinLink from '../util/generate-code-mixin-link';

export default function GeneratorMixinLink(): JSX.Element {
  return <>
    <H1>src/mixin/link.ts</H1>
    <Pre>{generateCodeMixinLink()}</Pre>
  </>;
}
