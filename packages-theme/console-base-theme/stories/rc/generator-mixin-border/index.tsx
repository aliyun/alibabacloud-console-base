import React from 'react';

import {
  H1,
  CodeViewerTs
} from '@alicloud/demo-rc-elements';

import {
  generateCodeMixinBorder
} from '../../util';

export default function GeneratorMixinBorder(): JSX.Element {
  return <>
    <H1>src/mixin/border.ts</H1>
    <CodeViewerTs>{generateCodeMixinBorder()}</CodeViewerTs>
  </>;
}
