import React from 'react';

import {
  H1,
  CodeViewerTs
} from '@alicloud/demo-rc-elements';

import {
  generateCodeMixinBorderRadius
} from '../../util';

export default function GeneratorMixinBorderRadius(): JSX.Element {
  return <>
    <H1>src/mixin/border-radius.ts</H1>
    <CodeViewerTs>{generateCodeMixinBorderRadius()}</CodeViewerTs>
  </>;
}
