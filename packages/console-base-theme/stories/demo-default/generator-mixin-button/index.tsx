import React from 'react';

import {
  H1,
  Pre
} from '@alicloud/demo-rc-elements';

import generateCodeMixinButton from '../../util/generate-code-mixin-button';

export default function GeneratorMixinButton(): JSX.Element {
  return <>
    <H1>src/mixin/button.ts</H1>
    <Pre>{generateCodeMixinButton()}</Pre>
  </>;
}
