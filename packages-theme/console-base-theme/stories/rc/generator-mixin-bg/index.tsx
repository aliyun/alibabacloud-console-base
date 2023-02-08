import React from 'react';

import {
  H1,
  CodeViewerTs
} from '@alicloud/demo-rc-elements';

import {
  generateCodeMixinBg
} from '../../util';

export default function GeneratorMixinBg(): JSX.Element {
  return <>
    <H1>src/mixin/bg.ts</H1>
    <CodeViewerTs>{generateCodeMixinBg()}</CodeViewerTs>
  </>;
}
