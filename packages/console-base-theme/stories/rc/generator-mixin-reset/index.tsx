import React from 'react';

import {
  H1,
  CodeViewerTs
} from '@alicloud/demo-rc-elements';

import {
  generateCodeMixinReset
} from '../../util';

export default function GeneratorMixinReset(): JSX.Element {
  return <>
    <H1>src/mixin/reset.ts</H1>
    <CodeViewerTs>{generateCodeMixinReset()}</CodeViewerTs>
  </>;
}
