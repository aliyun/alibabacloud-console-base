import React from 'react';

import {
  H1,
  CodeViewerTs
} from '@alicloud/demo-rc-elements';

import {
  generateCodeMixinButton
} from '../../util';

export default function GeneratorMixinButton(): JSX.Element {
  return <>
    <H1>src/mixin/button.ts</H1>
    <CodeViewerTs>{generateCodeMixinButton()}</CodeViewerTs>
  </>;
}
