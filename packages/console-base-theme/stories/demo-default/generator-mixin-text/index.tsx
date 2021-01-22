import React from 'react';

import {
  H1,
  Pre
} from '@alicloud/demo-rc-elements';

import generateCodeMixinText from '../../util/generate-code-mixin-text';

export default function GeneratorMixinText(): JSX.Element {
  return <>
    <H1>src/mixin/text.ts</H1>
    <Pre>{generateCodeMixinText()}</Pre>
  </>;
}
