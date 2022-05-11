import React from 'react';

import {
  H1,
  CodeViewerTs
} from '@alicloud/demo-rc-elements';

import {
  generateCodeMixinInput
} from '../../util';

export default function GeneratorMixinInput(): JSX.Element {
  return <>
    <H1>src/mixin/input.ts</H1>
    <CodeViewerTs>{generateCodeMixinInput()}</CodeViewerTs>
  </>;
}
