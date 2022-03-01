import React from 'react';

import {
  H1,
  CodeViewerTs
} from '@alicloud/demo-rc-elements';

import {
  generateCodeMixinText
} from '../../util';

export default function GeneratorMixinText(): JSX.Element {
  return <>
    <H1>src/mixin/text.ts</H1>
    <CodeViewerTs>{generateCodeMixinText()}</CodeViewerTs>
  </>;
}
