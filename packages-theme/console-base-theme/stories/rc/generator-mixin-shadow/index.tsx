import React from 'react';

import {
  H1,
  CodeViewerTs
} from '@alicloud/demo-rc-elements';

import {
  generateCodeMixinShadow
} from '../../util';

export default function GeneratorMixinShadow(): JSX.Element {
  return <>
    <H1>src/mixin/shadow.ts</H1>
    <CodeViewerTs>{generateCodeMixinShadow()}</CodeViewerTs>
  </>;
}
